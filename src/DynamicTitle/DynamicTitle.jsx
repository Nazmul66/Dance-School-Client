import { useEffect } from "react";

const DynamicTitle = (title) => {   
    useEffect(() =>{
       document.title = `Dance School || ${title}`
    },[title])
};

export default DynamicTitle;