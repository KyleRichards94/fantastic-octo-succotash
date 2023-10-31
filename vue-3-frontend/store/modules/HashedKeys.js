//super secret hashed keys, this js file is to be heavily encripted and noone is to know its location. 

const state = {
    cardInfoHashedKey: "602180932584db97696812f66041665176eef325b740e01138cca037b844e3bc5efa56b645c2af53ea692494ced626491eaf283d33b2973aae98239485394989",
    shippingInfoHashedKey: "2ad59922acb10f6ea75ceb3e914a1210831aa94354251d5e3330055a8b71eae635cacb1fe7c7b924d9412e0253fe20ee"
  };

  const getters = {
    CardHash: state => state.cardInfoHashedKey,
    shippingInfoHashedKey: state => state.shippingInfoHashedKey,
  };

  export default {
    namespaced: true,
    state,
    getters,
  };