import { useState } from "react";

export const con_PasswordVisibility = () => {
    const [passwordVisibility2, setPasswordVisibility2] = useState(true);
    const [rightIcon2, setRightIcon2] = useState('eye');
  
    const handlePasswordVisibility2 = () => {
      if (rightIcon2 === 'eye') {
        setRightIcon2('eye-off');
        setPasswordVisibility2(!passwordVisibility2);
      } else if (rightIcon2 === 'eye-off') {
        setRightIcon2('eye');
        setPasswordVisibility2(!passwordVisibility2);
      }
    };
  
    return {
      passwordVisibility2,
      rightIcon2,
      handlePasswordVisibility2,
    };
  };