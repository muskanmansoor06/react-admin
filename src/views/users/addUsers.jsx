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
  CFormSelect,
  CRow,
} from '@coreui/react'

const AddUsers = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userRole: '',
  })

  const roles = ['Admin', 'Editor', 'Viewer'] // Static roles, replace with API call if needed.

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('User Data Submitted:', formData)

    // Add API logic to send `formData` to your backend
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Users</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                <CFormLabel htmlFor="userName">User Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="userName"
                  placeholder="Enter user name"
                  value={formData.userName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="userEmail">Email</CFormLabel>
                <CFormInput
                  type="email"
                  id="userEmail"
                  placeholder="Enter email address"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="userPassword">Password</CFormLabel>
                <CFormInput
                  type="password"
                  id="userPassword"
                  placeholder="Enter password"
                  value={formData.userPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="userRole">Role</CFormLabel>
                <CFormSelect
                  id="userRole"
                  value={formData.userRole}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a role</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </CFormSelect>
              </div>
              <CButton type="submit" color="primary">
                Add User
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddUsers
