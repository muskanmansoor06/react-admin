import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CRow,
} from '@coreui/react'

const AddProducts = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
    productCategory: '',
    productImage: null,
  })

  const [categories, setCategories] = useState([]) // State for categories

  // Simulate fetching categories
  useEffect(() => {
    // Simulated category data. Replace with API call if needed.
    const fetchCategories = async () => {
      const data = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Home Appliances' },
      ]
      setCategories(data)
    }

    fetchCategories()
  }, [])

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  // Handle file input change
  const handleFileChange = (e) => {
    const { files } = e.target
    if (files && files[0]) {
      setFormData({ ...formData, productImage: files[0] })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    // Logic to send this data to your API or server
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Products</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="productName">Product Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="productName"
                  placeholder="Enter product name"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productPrice">Product Price</CFormLabel>
                <CFormInput
                  type="text"
                  id="productPrice"
                  placeholder="Enter product price"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productCategory">Product Category</CFormLabel>
                <CFormSelect
                  id="productCategory"
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </CFormSelect>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productDescription">Product Description</CFormLabel>
                <CFormTextarea
                  id="productDescription"
                  rows={3}
                  placeholder="Enter product description"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                  required
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="productImage">Product Image</CFormLabel>
                <CFormInput
                  type="file"
                  id="productImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <CButton type="submit" color="primary">
                Submit
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddProducts
