import '../assets/css/style.css';
import { Popover } from '@material-ui/core';
import { useState } from 'react';

export default function PopoverInformation({popoverMessage}) {
    const [anchor, setAnchor] = useState(null);

    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    }
    return (
        <>
            <p className='icons-right' onClick={openPopover}>
                <i className="bi bi-info-circle-fill"></i>
            </p>
            <Popover open={Boolean(anchor)} anchorEl={anchor}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                onClose={() => setAnchor(null)}
            >
                <p className='popover-message'>
                    {popoverMessage}
                </p>

            </Popover>
        </>
    );
}