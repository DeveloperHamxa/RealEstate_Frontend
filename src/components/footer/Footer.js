import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import logo from '../../assets/images/logo.png'


export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap" 
        style={{ width: '90%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={logo}
              width="80px"
            />
            <span className="ml-4 h5 mb-0 font-weight-bold">Social Real Estate System</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; TechloSet Solutions, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="primary" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="info" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="danger" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
      <img
              alt="logo"
              src="https://s.zillowstatic.com/pfs/static/footer-art.svg"
            />
    </CDBFooter>
  );
};