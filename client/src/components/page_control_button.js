export default function PageControlButton({
    url, label
}) {
    return (
        <>
            <a href={url} class="btn btn-primary btn-sm bg-gradient-primary rounded-0 btn-icon-split mb-0">
                <span class="icon text-white-600">
                    <i class="fas fa-plus-circle"></i>
                </span>
                <span class="text">{label}</span>
            </a>
        </>
    );
}