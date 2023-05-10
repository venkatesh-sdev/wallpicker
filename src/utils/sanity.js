import { createClient } from '@sanity/client'
import ImageURLBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'k3g6dk46',
    dataset: 'production',
    apiVersion: '2023-05-09',
    useCdn: true
})

const builder = ImageURLBuilder(client)

export const urlFor = (source) => builder.image(source)

export const getCategory = async () => {
    const categoryItems = await client.fetch('*[_type=="category"]').then((data) => data)
    return categoryItems
}

export const getItems = async (id) => {
    const items = await client.fetch(`*[_type == "items" 
  &&
  $id 
  in categories[]->_id]`, { id }).then(data => data)

    return items
}

export const getItem = async (id) => {
    const item = await client.fetch(`*[_type == "items" && _id==$id ][0]`,{id}).then(data => data)
    return item
}