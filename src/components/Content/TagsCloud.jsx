import Tag from "./Tag";

const tags = [
    {
        'url': '/life',
        'name': 'Life'
    },
    {
        'url': '/ability',
        'name': 'Ability'
    },
    {
        'url': '/success',
        'name': 'Success'
    },
    {
        'url': '/stuggle',
        'name': 'Stuggle'
    },

    {
        'url': '/instagram',
        'name': 'Instagram'
    },
]

const TagsCloud = () => {
    return (
        <div className="flex flex-wrap my-2">
            {tags.map(tag => {
                return <Tag key={tag.name} {...tag} />
            })}

        </div>
    )
}

export default TagsCloud;
