import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import NotFound from "../pages/NotFound";
import TeacherDetails from "../pages/TeacherDetails";
import PrivateRouter from "./PrivateRouter";
import CardDetails from "../pages/CardDetails";
import AWS from "../pages/AWS";
import FS from "../pages/FS";
import Login from "../pages/Login"
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/teacher/:idd" element={<TeacherDetails />} />

                    <Route path="/courses" element={<PrivateRouter />}>
                        <Route path="" element={<CourseCard />} />
                    </Route>

                    <Route path="/courses/:namE" element={<CardDetails />} />

                    <Route path="/contact" element={<PrivateRouter />}>
                        <Route path="" element={<ContactForm />} />
                    </Route>

                    {/* <Route path="/paths" element={<Paths />} /> */}

                    <Route path="/paths" element={<Paths />}>
                        <Route path="/paths/fs" element={<FS />} />

                        <Route path="aws" element={<AWS />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;
