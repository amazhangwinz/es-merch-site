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
import SizeGuideModal from '../components/SizeGuideModal';

const ImagePreviewContainer = () => ({
  display: 'flex',
  justifyContent: { md: 'center', xs: "flex-start" },
  background: '#ECECEC',
  // margin:5rem;
  // border-style: dotted;
  alignItems: 'center',
  flexDirection: { md: 'row', xs: "column" },
  marginTop: "1rem",

})

const ImageDetailContainer =
{
  width: { md: "32.3125rem", xs: "fit-content" },
  height: { md: "27.75rem", xs: "fit-content" },
  flexShrink: 0,
  // background: red;
  display: "flex",
  justifyContent: { md: "space-around", xs: "flex-start" },
  alignItems: "center",
  flexDirection: "column",
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

})
const RelatedImageContainer = () => ({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: { xs: "400px", md: 'none' },
  flexDirection: { xs: "column", md: "row" },
  margin: { xs: "1rem", md: "none" }
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
  color: "#1C3A59",
  fontFamily: "Montserrat",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "normal",
  marginTop: "2rem",
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

    if (findMatch(cart,
      {
        price: itemObj.price,
        name: itemObj.name,
        quantity: 1,
        image: itemObj.default,
        size: size,
        total: itemObj.price * 1
      })) {
      // if (findMatch(cart, { price: itemObj.price, name: itemObj.name, quantity: 1, colour: itemObj.colours[clickedButton].name, image: itemObj.default, size: size })) {
      cart.forEach(element => {
        // if (element.price == itemObj.price && element.name == itemObj.name && element.size == size && element.colour == itemObj.colours[clickedButton].name)
        if (element.price === itemObj.price && element.name === itemObj.name && element.size === size && element.image === itemObj.default)
          element.quantity += qty;
        // todo error: can add 5+ to the cartitem if you do +3 + 4
        if (element.quantity > 5)
          element.quantity = 5;
      });
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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: { md: "space-evenly", xs: "center" } }}>
      <Breadcrumbs sx={stylebreadcrumbs}>
        <Link color={"inherit"} underline={"hover"} onClick={() => { navigate('/') }}>Home</Link>
        <Link color={"inherit"} underline={"none"}>{itemTitle}</Link>
      </Breadcrumbs>
      <Box sx={ImagePreviewContainer}>
        <Box>
          <ImagePreview itemName={itemTitle} />
          {/* <ImagePreview itemName={itemTitle} heroSrc={heroSrc} setHero={setHero} /> */}
        </Box>
        <Box sx={ImageDetailContainer}>
          <Container sx={{ marginTop: { xs: '.5rem' }, margin: { md: "1rem" }, maxWidth: { md: 'none', xs: "370px" }, paddingLeft: { md: "none", xs: "1.5rem" }, paddingRight: { md: "none", xs: "1.5rem" } }}>
            <Typography variant="h3" sx={{ color: '#1C3A59', fontFamily: "Montserrat", fontWeight: '700', fontSize: { md: '2.5rem', xs: "2rem" }, lineHeight: "normal" }} gutterBottom>
              {itemTitle}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ color: '#1C3A59', fontFamily: "Montserrat", fontWeight: '600', fontSize: { md: '2.5rem', xs: "1.8rem" }, lineHeight: "normal" }}>
              ${itemObj.price}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: '#1C3A59', fontFamily: "Montserrat", fontSize: { md: "1.5625rem", xs: "1.2rem" }, fontWeight: '400', lineHeight: "normal" }}>
              {itemObj.description}
            </Typography>

          </Container>
          {/* <ColourSelector clickedButton={clickedButton} setClickedButton={setClickedButton} itemName={itemTitle}></ColourSelector> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: { md: "none", xs: "400px" } }}>
            <QuantitySelector size='medium' width={80} qty={qty} setQty={setQty}></QuantitySelector>
            <SizeSelector size={size} setSize={setSize} />
            <CheckoutModal handleAddToCart={handleAddToCart}></CheckoutModal>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: { md: 3, xs: 0 }, justifyContent: "space-around" }}>
            <SizeGuideModal img={itemObj.sizeguide} />
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
          paddingLeft: '1rem',
          paddingRight: '1rem',
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
