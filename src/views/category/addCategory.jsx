import React, { useState } from 'react'
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
  CRow,
} from '@coreui/react'

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState({
    categoryName: '',
    categoryDescription: '',
    categoryImage: null,
  })

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setCategoryData({ ...categoryData, [id]: value })
  }

  // Handle file input change
  const handleFileChange = (e) => {
    const { files } = e.target
    if (files && files[0]) {
      setCategoryData({ ...categoryData, categoryImage: files[0] })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Category Data Submitted:', categoryData)
    // Add logic to send categoryData to your API or server here
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Category</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="categoryName">Category Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="categoryName"
                  placeholder="Enter category name"
                  value={categoryData.categoryName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="categoryDescription">Category Description</CFormLabel>
                <CFormTextarea
                  id="categoryDescription"
                  rows={3}
                  placeholder="Enter category description"
                  value={categoryData.categoryDescription}
                  onChange={handleInputChange}
                  required
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="categoryImage">Category Image</CFormLabel>
                <CFormInput
                  type="file"
                  id="categoryImage"
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

export default AddCategory
