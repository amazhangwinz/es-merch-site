import React from 'react';
import ImagePreview from "../components/ImagePreview"
import RelatedItems from '../components/RelatedItemBox';
import CheckoutModal from '../components/CheckoutModal';
// import ColourSelector from '../components/ColourSelector';
import QuantitySelector from '../components/QuanitySelector';
import { data } from "../Data.jsx"
import { cartContext } from '../App';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { findItemObject, findMatch } from '../Helpers';
import Typography from '@mui/material/Typography';
import { Box, Container, Breadcrumbs, Link } from '@mui/material';
import SizeSelector from '../components/SizeSelector';
// import SizeGuideModal from '../components/SizeGuideModal';
import Button from '@mui/material/Button';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const ImagePreviewContainer = () => ({
  display: 'flex',
  justifyContent: { md: 'center', xs: "flex-start" },
  background: '#ECECEC',
  // margin:5rem;
  // border-style: dotted;
  alignItems: { md: 'flex-start', xs: "center" },
  flexDirection: { md: 'row', xs: "column" },
  mt: { md: "1rem", xs: 0 }
})

const ImageDetailContainer =
{
  width: { md: "32.3125rem", xs: "100vw" },
  height: { md: "27.75rem", xs: "fit-content" },
  flexShrink: 0,
  // background: red;
  display: "flex",
  justifyContent: { md: "center", xs: "flex-start" },
  alignItems: "center",
  flexDirection: "column",
  marginBottom: { md: 0, xs: "1rem" },
  ml: {md: "5vw", xs: '0'},

  // padding: 2rem;
}


const RelatedItemsContainer = () => ({
  textAlign: "left",
  color: "#1C3A59",
  fontFamily: "Montserrat",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "normal",
  margin: { md: "1rem", xs: "none" },
  mt: { xs: 0 },

})
const RelatedImageContainer = () => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  alignItems: 'center',
  textAlign: 'center',
  width: '100vw',
  // maxWidth: { xs: "400px", md: 'none' },
  flexDirection: { xs: "column", md: "row" },
  // margin: { xs: "1rem", md: "none" }
})

// const RelatedDetailsContainer = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  width: 100%;
//  height: 25%;
// padding: 1rem;
// `
const stylebreadcrumbs = {
  display: { md: "block", xs: "none" },
  textAlign: "left",
  color: "#808080",
  fontFamily: "Montserrat",
  fontSize: "1.4rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  marginTop: "3rem",
  marginLeft: "2rem",
}

type SingleItemProp = {
  children?: any;
}

const SingleItemPage = (prop: SingleItemProp) => {

  const { cart, setCart } = React.useContext(cartContext);

  const [queryString] = useSearchParams();
  // NAME
  const itemTitle = queryString.get('title');
  // CAN GET PRICE
  const itemObj = findItemObject(itemTitle);
  // SIZE
  const [size, setSize] = React.useState('Small');
  // // COLOURS INDEX . NAME
  // const [clickedButton, setClickedButton] = React.useState(0);
  // const [heroSrc, setHero] = React.useState(itemObj.colours[0].img);
  // BRING QUANTITY USESTATE OUTSIDE OF COMPONENT - DONE
  const [qty, setQty] = React.useState(1);

  const handleAddToCart = () => {
    const indexAtCart = findMatch(cart,
      itemObj.name,size)

    if (indexAtCart !== -1) {
      // if (findMatch(cart, { price: itemObj.price, name: itemObj.name, quantity: 1, colour: itemObj.colours[clickedButton].name, image: itemObj.default, size: size })) {
      cart[indexAtCart].quantity += qty;
        // todo error: can add 5+ to the cartitem if you do +3 + 4
        if (cart[indexAtCart].quantity > 5)
        cart[indexAtCart].quantity = 5;
        cart[indexAtCart].total = Math.round((cart[indexAtCart].price * cart[indexAtCart].quantity + Number.EPSILON) * 100) / 100;
    } else {
      // cart.push({ price: itemObj.price, name: itemObj.name, quantity: qty, colour: itemObj.colours[clickedButton].name, image: itemObj.default, size: size });
      cart.push({
        price: itemObj.price,
        name: itemObj.name,
        quantity: qty,
        image: itemObj.default,
        size: size,
        total: Math.round((itemObj.price * qty + Number.EPSILON) * 100) / 100
      })
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  }

  // React.useEffect(() => {
  //   setHero(() => itemObj.colours[clickedButton].img);
  // }, [clickedButton]);

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: { md: "space-evenly", xs: "center" }, }}>
      <Breadcrumbs sx={stylebreadcrumbs}>
        <Link sx={{cursor: "pointer"}} color={"inherit"} underline={"hover"} onClick={() => { navigate('/') }}>Home</Link>
        <Link color={"inherit"} underline={"none"}>{itemTitle}</Link>
      </Breadcrumbs>
      <Box sx={ImagePreviewContainer}>
        <Box sx={{alignItems: "flex-start", display: {xs: 'none', md:'block'} }}>
          <ImagePreview itemName={itemTitle} />
          {/* <ImagePreview itemName={itemTitle} heroSrc={heroSrc} setHero={setHero} /> */}
        </Box>
        <Box sx={{minWidth: "100vw", justifyContent: "center", display: {xs: 'flex', md:'none'} }}>
          <ImagePreview itemName={itemTitle} />
          </Box>
        <Box sx={ImageDetailContainer}>
          <Container sx={{ display: 'flex', justifyContent: "center", flexDirection: 'column', marginTop: { md: "1rem", xs: '0.7rem' }, alignContent: 'center'}}>
            <Typography gutterBottom variant="h3" sx={{ mb: { xs: 0 }, color: '#1C3A59', fontFamily: "Montserrat", fontWeight: '700', fontSize: { md: '2.5rem', xs: "2rem" }, lineHeight: "normal" }}>
              {itemTitle}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: "0.5rem", color: '#1C3A59', fontFamily: "Montserrat", fontWeight: '600', fontSize: { md: '2rem', xs: "1.8rem" }, lineHeight: "normal", mb: { xs: 0 } }}>
              ${itemObj.price}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mt: "1rem", mb: 0, color: '#1C3A59', fontFamily: "Montserrat", fontSize: { md: "1.4rem", xs: "1.2rem" }, fontWeight: '400', lineHeight: "normal" }}>
              {itemObj.description}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mt: "1rem", color: '#374a5d', fontFamily: "Montserrat", fontSize: { md: "1.1rem", xs: "0.9rem" }, fontWeight: '400', lineHeight: "normal" }}>
              Details: {itemObj.details}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth: { md: "none", xs: "360px" }, mt: { xs: "0.5rem", md: "1rem" }, justifyContent:"center" }}>
            <QuantitySelector width={80} qty={qty} setQty={setQty}></QuantitySelector>
            <SizeSelector size={size} setSize={setSize} />
            <Button  sx={{ minHeight: 0, minWidth: 0, padding: 0 }} href='https://www.bocini.com.au/Product/ProductDetail/CJ1060?search=hoodie#' target="_blank"><SquareFootIcon sx={{ color: '#1C3A59', fontSize: {xs:"2.4rem", md: '3.5rem'}, }} /></Button>
          </Box>


          </Container>
          {/* <ColourSelector clickedButton={clickedButton} setClickedButton={setClickedButton} itemName={itemTitle}></ColourSelector> */}

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
            {/* <SizeGuideModal img={itemObj.sizeguide} /> */}
            <CheckoutModal unitPrice={itemObj.price} qty={qty} image={itemObj.default} title={itemObj.name} size={size} handleAddToCart={handleAddToCart}></CheckoutModal>
          </Box>
        </Box>
      </Box>
      <Box sx={RelatedItemsContainer}>
        <Typography variant='h1' sx={{
          fontSize: 35, textAlign: 'center',
          color: "#1C3A59",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "normal",
          margin: { md: 0, xs: "1rem" },
          mt: { xs: '0' },
        }}>Here are some items you'll also love</Typography>
        <Box sx={RelatedImageContainer} >
          {data.map((e) => {
            if (e.name !== itemTitle) {
              return (
                // <RelatedItems price={e.price} itemtext={e.name} img={e.colours[0].img}></RelatedItems>
                <RelatedItems price={e.price} itemtext={e.name} img={e.default}></RelatedItems>
              )
            }
            else {
              return (<></>)
            }
          })}
        </Box>
      </Box>
    </Box >
  )
}

export default SingleItemPage;
