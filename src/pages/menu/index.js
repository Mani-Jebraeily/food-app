import MenuPage from '@/components/template/MenuPage'

import axios from 'axios'

function Menu({ data }) {
  return (
    <>
      <MenuPage data={data} />
    </>
  )
}

export default Menu

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BASE_URL}/data`)
  const data = res.data
  console.log(data)

  return {
    props: {
      data
    },
    revalidate: +process.env.REVALIDATE

  }

}