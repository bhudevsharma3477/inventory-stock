import React, { createContext, useState, useEffect, useMemo } from "react";

var Context = createContext();

var Appcontext = ({ children }) => {
  var [apidata, setapidata] = useState([]);
  var [modalshow, setmodalshow] = useState(false);
  var [updatemodalshow, setupdatemodalshow] = useState(false);

  //modal input data
  var [items, setitems] = useState();
  var [stock, setstock] = useState();
  var [price, setprice] = useState();
  var [margin, setmargin] = useState();

  //fetchig backened api data
  var datafn = async () => {
    var resdata = await fetch("http://localhost:5000/apidata");
    var myresdata = await resdata.json();
    apidata = myresdata;
    setapidata(apidata);
  }

  useEffect(() => {datafn()}, []);

  //modal open and close functions
  var modalopenfn = () => setmodalshow(true)
  var modalclosefn = () => setmodalshow(false)

  var updatemodalopenfn = () => setupdatemodalshow(true)
  var updatemodalclosefn = () => setupdatemodalshow(false)

  //modal input onchange handler
  var itemsonchange = (event) => setitems(event.target.value);
  var stockonchange = (event) => setstock(event.target.value);
  var priceonchange = (event) => setprice(event.target.value);
  var marginonchange = (event) => setmargin(event.target.value);

  //modal clear button function
  var clearfn = () => {
    setitems("");
    setstock("");
    setprice("");
    setmargin("");
  }

  //posting input data to server
  var formsubmit = async (event) => {
    event.preventDefault();
    try {
      var senddata = await fetch("http://localhost:5000/apidata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ items, stock, price, margin }),
      });

      if (senddata.status === 200) {
        alert("Data Posted Successfully....");
      } else {
        alert("Failed");
      }
      setitems("");
      setstock("");
      setprice("");
      setmargin("");
    }
    catch (err) {
      return console.log(err);
    }

  }


  return (
    <>
      <Context.Provider value={{updatemodalclosefn, updatemodalopenfn, updatemodalshow, clearfn, formsubmit, itemsonchange, stockonchange, priceonchange, 
        marginonchange, modalopenfn, modalclosefn, items, stock, price, margin, modalshow, apidata }}>
        {children}
      </Context.Provider>
    </>
  );
}

export default Appcontext;
export { Context };