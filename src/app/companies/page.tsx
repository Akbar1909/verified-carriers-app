'use client'
import MainLayout from "@/components/Layout/MainLayout";


import Container from "@/components/Container";
import { SearchIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import React from "react";
import CompanyList from "./_components/CompanyList";

const CompaniesPage = () => {
  return (
    <MainLayout>
      <div className="py-24 flex items-center justify-center relative">
        <Container maxWidth="lg">
          <div className="flex items-center flex-col gap-8">
            <h1 className="text-d-xs-semibold lg:text-d-lg-semibold text-gray-900 text-center">
              Best companies in Heavy <br /> Equipment Transportation
            </h1>

            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <TextField
                className="w-full max-w-160 lg:w-160 h-12"
                startIcon={<SearchIcon />}
                placeholder="Company name or service"
              />
              
            </div>
          </div>
        </Container>
        
      </div>
      <CompanyList/>
    </MainLayout>
  );
};

export default CompaniesPage;
