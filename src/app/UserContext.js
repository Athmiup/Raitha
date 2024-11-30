'use client';
import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [check, setcheck] = useState(false);
    const [reg, setreg] = useState(true);
    const [Items, setItems] = useState([]);

    // Initialize itemQuantities based on Items
    const [itemQuantities, setItemQuantities] = useState(() =>
        Items.reduce((acc, item) => {
            acc[item.contactNumber] = acc[item.contactNumber] || {};
            acc[item.contactNumber][item.itemName] = 1; // Default quantity is 1
            return acc;
        }, {})
    );

    // Whenever Items change, reinitialize itemQuantities
    React.useEffect(() => {
        setItemQuantities(() =>
            Items.reduce((acc, item) => {
                acc[item.contactNumber] = acc[item.contactNumber] || {};
                acc[item.contactNumber][item.itemName] = 1; // Default quantity is 1
                return acc;
            }, {})
        );
    }, [Items]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                check,
                setcheck,
                reg,
                setreg,
                Items,
                setItems,
                itemQuantities,
                setItemQuantities, // Pass state management functions
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for accessing the UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
