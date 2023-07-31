import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import harvardArt from "../../data/harvardArt"


const GalleryNavigation = props => {
    // const arts = Object.values(harvardArt)
    // const {galleries} = props
    const galleries = props.galleries
    const records = galleries.map( gallery => {
        return <NavLink key={gallery.id} to={`/galleries/:${gallery.id}`}>{gallery.name}</NavLink>
    })
    console.log(galleries)
    return (
        <>
            {records}
            <h1>Galleries</h1>
            <NavLink to="/">Home Page</NavLink>
        </>
    )
}

export default GalleryNavigation