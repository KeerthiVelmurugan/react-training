import React, { useEffect, useRef, useState } from 'react';

const VideoConn = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const iceServers = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  };

  useEffect(() => {
    // Initialize media stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        setLocalStream(stream);
      })
      .catch((error) => {
        console.error('Error accessing media devices.', error);
      });
  }, []);

  const createOffer = async () => {
    peerConnectionRef.current = new RTCPeerConnection(iceServers);

    // Add local tracks to peer connection
    localStream.getTracks().forEach((track) => {
      peerConnectionRef.current.addTrack(track, localStream);
    });

    // Handle remote stream
    peerConnectionRef.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // ICE candidate handling
    peerConnectionRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('New ICE candidate:', event.candidate);
      }
    };

    // Create offer
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);

    console.log('Offer created:', offer);
  };

  const createAnswer = async (offer) => {
    peerConnectionRef.current = new RTCPeerConnection(iceServers);

    // Add local tracks to peer connection
    localStream.getTracks().forEach((track) => {
      peerConnectionRef.current.addTrack(track, localStream);
    });

    // Handle remote stream
    peerConnectionRef.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // ICE candidate handling
    peerConnectionRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('New ICE candidate:', event.candidate);
      }
    };

    // Set remote description and create answer
    await peerConnectionRef.current.setRemoteDescription(offer);
    const answer = await peerConnectionRef.current.createAnswer();
    await peerConnectionRef.current.setLocalDescription(answer);

    console.log('Answer created:', answer);
  };

  const handleOffer = async () => {
    await createOffer();
    setIsConnected(true);
  };

  const handleAnswer = async () => {
    if (peerConnectionRef.current.localDescription) {
      await createAnswer(peerConnectionRef.current.localDescription);
      setIsConnected(true);
    }
  };

  return (
    <div>
      <h1>WebRTC React Example</h1>
      <div>
        <video ref={localVideoRef} autoPlay playsInline style={{ width: '45%' }} />
        <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '45%' }} />
      </div>
      <div>
        <button onClick={handleOffer} disabled={isConnected}>
          Start Offer
        </button>
        <button onClick={handleAnswer} disabled={isConnected}>
          Create Answer
        </button>
      </div>
    </div>
  );
};

export default VideoConn;
