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

// import { DocsComponents, DocsExample } from 'src/components'

const ViewProducts = () => {
  const products = [
    {
      productName: 'Laptop',
      productPrice: '1200',
      productDescription: 'High-performance laptop for work and gaming.',
      productImage: 'https://via.placeholder.com/50', // Placeholder image
    },
    {
      productName: 'Smartphone',
      productPrice: '800',
      productDescription: 'Latest smartphone with cutting-edge technology.',
      productImage: 'https://via.placeholder.com/50', // Placeholder image
    },
    {
      productName: 'Headphones',
      productPrice: '200',
      productDescription: 'Noise-cancelling headphones for music lovers.',
      productImage: 'https://via.placeholder.com/50', // Placeholder image
    },
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Product List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>
                  <CTableHeaderCell>Product Name</CTableHeaderCell>
                  <CTableHeaderCell>Price</CTableHeaderCell>
                  <CTableHeaderCell>Description</CTableHeaderCell>
                  <CTableHeaderCell>Image</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {products.map((product, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell>{index + 1}</CTableHeaderCell>
                    <CTableDataCell>{product.productName}</CTableDataCell>
                    <CTableDataCell>{product.productPrice}</CTableDataCell>
                    <CTableDataCell>{product.productDescription}</CTableDataCell>
                    <CTableDataCell>
                      {product.productImage && (
                        <img src={product.productImage} alt="Product" style={{ width: '50px' }} />
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
                      <CButton color="danger" size="sm" onClick={() => handleDelete(index)}>
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

export default ViewProducts
