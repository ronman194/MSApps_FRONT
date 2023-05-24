import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import SelectCategory from './selectCategory';
import PreviewImage from './previewImage';

// modal component select the match modal (category || image) according to the props

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(props.isOpen)
    }, [props.isOpen])

    const handleClose = () => props.setIsOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {props.photo ?
                    <PreviewImage close={handleClose} photo={props.photo} />
                    :
                    <div className='flex justify-center mt-10'>
                        <SelectCategory close={handleClose} />
                    </div>
                }

            </Modal>
        </div>
    );
}
