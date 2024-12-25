import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
} from '@coreui/react'

const ViewCategory = () => {
    const categories = [
        {
          categoryName: 'Electronics',
          categoryDescription: 'Devices and gadgets like smartphones, laptops, and accessories.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          categoryName: 'Clothing',
          categoryDescription: 'Apparel for men, women, and children including shirts, pants, and dresses.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          categoryName: 'Home Appliances',
          categoryDescription: 'Products to help with daily tasks around the house, like washing machines and refrigerators.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          categoryName: 'Books',
          categoryDescription: 'Books in various genres such as fiction, non-fiction, and educational materials.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          categoryName: 'Toys',
          categoryDescription: 'Fun and educational toys for children of all ages.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
        {
          categoryName: 'Sports & Outdoors',
          categoryDescription: 'Equipment and accessories for various outdoor and indoor sports.',
          categoryImage: 'https://via.placeholder.com/50', // Placeholder image
        },
      ]
      
      
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Category List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>
                  <CTableHeaderCell>Category Name</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>Image</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {categories.map((category, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{category.categoryName}</CTableDataCell>
                    <CTableDataCell>{category.categoryDescription}</CTableDataCell>
                    <CTableDataCell>
                      {category.categoryImage ? (
                        <img
                          src={category.categoryImage}
                          alt="Category"
                          style={{ width: '50px' }}
                        />
                      ) : (
                        <p>No Image</p>
                      )}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ViewCategory
