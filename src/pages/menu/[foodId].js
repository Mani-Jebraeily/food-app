import React from 'react'
import axios from 'axios'
import { redirect } from 'next/dist/server/api-utils'
import { notFound } from 'next/navigation'
import DetailsPage from '@/components/template/DetailsPage'

function DetailPage({ data }) {

    console.log(data)
    return (
        <DetailsPage {...data}/>
    )
}
export default DetailPage


export async function getStaticPaths() {
    const res = await axios.get("http://localhost:4000/data")
    const data = await res.data
    const paths = data.map((item) => (
        {
            params: {
                foodId: item.id.toString()
            }
        }
    ))
    return {
        paths, fallback: false
    }
}



export async function getStaticProps(context) {
    const { params } = context
    const id = params.foodId
    const res =await fetch(`http://localhost:4000/data/${id}`)
    const data=await res.json()

    return {
        props: {
            data
        },
        revalidate: 60 * 60,
    }

}