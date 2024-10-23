"use client"; // Marking this as a Client Component
//import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BackButton = () => {
    const router = useRouter();
    const returnHome = () => {
        router.push('/');
    }


    return (
        <div className="relative w-screen ml-8">
        <ArrowBackIcon onClick = {returnHome} className="mr-2" /> {/* Add margin to the right for spacing */}
        </div>
    );
};

export default BackButton;