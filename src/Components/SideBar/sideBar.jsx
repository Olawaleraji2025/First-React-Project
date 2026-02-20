import "./sideBar.css";
// Removed useState import as state is now managed in parent component (Header.jsx)

function SideMenu({ isOpen, onClose }) {
    // As a senior developer, I recommend lifting state to the parent component to avoid
    // conflicting states between Header and SideMenu. This ensures single source of truth
    // for sidebar visibility, preventing the double-click issue you experienced.
    // Props: isOpen (boolean) - controls visibility, onClose (function) - closes sidebar

    return (
        <div className={isOpen ? 'side-bar-container open' : 'side-bar-container'}>
            <img src="public/icon-close.svg" alt="Close sidebar" className="close-icon" onClick={onClose} />
            <ul className="links">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default SideMenu
