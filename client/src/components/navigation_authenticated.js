export default function NavigationAuthenticated() {
    return (
        <>
        <ul className="nav bg-success justify-content-end" id="topNav">
            <li className="nav-item">
                <a className="nav-link" href="/authenticate/login">
                Logout
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                >
                    auth(username)
                </a>
            </li>
            </ul>

        </>
    );
}