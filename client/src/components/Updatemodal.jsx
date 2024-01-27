import React from 'react';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../Appcontext';

const Updatemodal = (props) => {
    var { formsubmit,updatemodalclosefn, clearfn, itemsonchange, stockonchange, priceonchange, marginonchange, items, stock, price, margin, modalclosefn } = useContext(Context);
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='mainmodal'
            >
                <button onClick={updatemodalclosefn} className='modalclosebutton'>X</button>
                <div className="modalcontent">
                    <form action="" method='POST'>
                        <div className='row'>
                        
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default Updatemodal; 