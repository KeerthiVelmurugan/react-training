import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './Invoice.css'; // Import the CSS file

const Invoice = () => {
  const [items, setItems] = useState([
    { item: "", gst: "", quantity: "", rate: "", amount: "" }
  ]);
  const [showPreview, setShowPreview] = useState(false); // For showing preview
  const [pdfDataUrl, setPdfDataUrl] = useState(""); // To store the preview PDF data URL

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    if (field === "quantity" || field === "rate") {
      const quantity = parseFloat(updatedItems[index].quantity) || 0;
      const rate = parseFloat(updatedItems[index].rate) || 0;
      updatedItems[index].amount = quantity * rate;
    }
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { item: "", gst: "", quantity: "", rate: "", amount: "" }]);
  };

  const generatePDFPreview = () => {
    const input = document.getElementById("invoice");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      const pdfUrl = pdf.output("dataurlnewwindow"); // Get the PDF data URL
      setPdfDataUrl(pdfUrl);
      setShowPreview(true); // Show the preview
    });
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.addImage(pdfDataUrl, "PNG", 0, 0); // Use the preview PDF data URL
    pdf.save("invoice.pdf");
  };

  return (
    <div className="invoice-container">
      <Formik
        initialValues={{
          invoiceNo: "",
          invoiceDate: "",
          dueDate: "",
          businessName: "",
          businessDetail: "",
          clientName: "",
          clientDetail: "",
          notes: "",
          discount: "",
          sgst: "",
          cgst: "",
          logo: ""
        }}
        onSubmit={generatePDFPreview} // Preview the PDF on submit
      >
        <Form>
          <div id="invoice" className="invoice-box">
            <h2 className="title">Invoice Generator</h2>

            <div className="form-group">
              <label>Invoice No:</label>
              <Field name="invoiceNo" className="input-field" />
            </div>

            <div className="form-group">
              <label>Invoice Date:</label>
              <Field type="date" name="invoiceDate" className="input-field" />
            </div>

            <div className="form-group">
              <label>Due Date:</label>
              <Field type="date" name="dueDate" className="input-field" />
            </div>

            <div className="form-group">
              <label>Business Name:</label>
              <Field name="businessName" className="input-field" />
            </div>

            <div className="form-group">
              <label>Business Detail:</label>
              <Field as="textarea" name="businessDetail" className="textarea-field" />
            </div>

            <div className="form-group">
              <label>Client Name:</label>
              <Field name="clientName" className="input-field" />
            </div>

            <div className="form-group">
              <label>Client Detail:</label>
              <Field as="textarea" name="clientDetail" className="textarea-field" />
            </div>

            <h4 className="items-title">Items</h4>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>GST</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((itm, index) => (
                  <tr key={index}>
                    <td><input value={itm.item} onChange={(e) => handleItemChange(index, "item", e.target.value)} className="input-table" /></td>
                    <td><input value={itm.gst} onChange={(e) => handleItemChange(index, "gst", e.target.value)} className="input-table" /></td>
                    <td><input type="number" value={itm.quantity} onChange={(e) => handleItemChange(index, "quantity", e.target.value)} className="input-table" /></td>
                    <td><input type="number" value={itm.rate} onChange={(e) => handleItemChange(index, "rate", e.target.value)} className="input-table" /></td>
                    <td>{itm.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addItem} className="add-item-btn">Add Item</button>

            <div className="form-group">
              <label>SGST:</label>
              <Field name="sgst" className="input-field" />
            </div>

            <div className="form-group">
              <label>CGST:</label>
              <Field name="cgst" className="input-field" />
            </div>

            <div className="form-group">
              <label>Discount / Additional Charges:</label>
              <Field name="discount" className="input-field" />
            </div>

            <div className="form-group">
              <label>Notes:</label>
              <Field as="textarea" name="notes" className="textarea-field" />
            </div>
          </div>

          <button type="submit" className="preview-btn">Preview PDF</button>
        </Form>
      </Formik>

      {/* Preview Section */}
      {showPreview && (
        <div className="preview-section">
          <h3>PDF Preview</h3>
          <iframe src={pdfDataUrl} width="100%" height="500px" title="Invoice Preview"></iframe>
          <button onClick={downloadPDF} className="download-btn">Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default Invoice;
