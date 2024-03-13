import React from 'react'
import "./card.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineLocalGroceryStore } from "react-icons/md";


function card() {
  return (
    <div className='bigq'>
      
      
        <div className='bigw'>
         <h1 className='h1'>Toy store</h1>
          <ul className='ul'>
            <li>Games</li>
            <li>Primary</li>
            <li>Menu</li>
            <li>Costume</li>
            <li className='li'>Shop</li>
            <MdOutlineLocalGroceryStore  className='ic'/>
          </ul>
        </div>
        <div>
          <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYN5txc1Zz_LD6OOHaKnOcWwMfoMOTNj69A&usqp=CAU" alt="" />
          <div
      className="modal show" 
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
       </div>

    </div>
  )
}

export default card
