import React from 'react';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../Appcontext';

var MyModal = (props) => {
  var { formsubmit, clearfn, itemsonchange, stockonchange, priceonchange, marginonchange, items, stock, price, margin, modalclosefn } = useContext(Context);
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='mainmodal'
      >
        <button onClick={modalclosefn} className='modalclosebutton'>X</button>
        <div className="modalcontent">
          <form action="" method='POST' onSubmit={formsubmit}>
            <div className='row'>
              <div className="col-12">
                <label htmlFor="">ITEMS:</label>
                <input type="text" value={items} onChange={itemsonchange} /><br />
              </div>
              <div className="col-12">
                <label htmlFor="">STOCK:</label>
                <input type="text" value={stock} onChange={stockonchange} /><br />
              </div>
              <div className="col-12">
                <label htmlFor="">PRICE:</label>
                <input type="text" value={price} onChange={priceonchange} /><br />
              </div>
              <div className="col-12">
                <label htmlFor="">MARGIN(in Rs):</label>
                <input type="text" value={margin} onChange={marginonchange} /><br />
                <button className='submit' type='submit'>SUBMIT</button>
                <button className='clear' onClick={clearfn}>CLEAR</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default MyModal;