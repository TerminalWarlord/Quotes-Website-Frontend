
const Tag = ({ url, name }) => {
    return (
        <a href={url} className="rounded-full py-3 px-6 bg-base-200 m-1 hover:bg-base-100 border-2 border-neutral-content" >{name}</a>
    )
}

export default Tag
