
const Tag = ({ url, name }) => {
    return (
        <a href={url} className="rounded-full py-3 px-6 bg-base-200 mx-1 my-2 hover:bg-base-100">{name}</a>
    )
}

export default Tag
