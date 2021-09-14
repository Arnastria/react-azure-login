import { PromoData } from "./PromoData";


const DummyPromoData: Array<PromoData> = [
    {
        id: '1',
        MerchantLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/253f7e7c-8f8f-4a00-8269-8f9fb3d06c6a.png',
        Background: 'https://poininngcdn.azureedge.net/smartpromo/Promo/Background/f248e1cf-41b2-4e5d-97ea-258c3eecc47f.jpg',
        TitleRow1: '18 Donut',
        TitleRow2: '100K',
        Color: 'rgb(225, 193, 30)',
        ShowHotPromo: true,
        CardLogo: '',
        Day: '16 DAYS LEFT',
    },
    {
        id: '2',
        MerchantLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/222e4ef6-886a-4a03-a9a3-9572410e3320.png',
        Background: 'https://poininngcdn.azureedge.net/smartpromo/Promo/Background/d4b66920-508d-4478-8716-63b889fe14ca.jpg',
        TitleRow1: 'Coffee',
        TitleRow2: 'Buy 1 Get 1',
        Color: 'rgb(161, 123, 94)',
        ShowHotPromo: false,
        CardLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/cbc09b0d-2907-4a0f-aa15-9735d67b5736.png',
        Day: '10 DAYS LEFT',
    },
    {
        id: '3',
        MerchantLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/543166c3-6310-4faf-ba42-7068ab78a648.png',
        Background: 'https://poininngcdn.azureedge.net/smartpromo/Promo/Background/64b4bb9d-a3fc-463b-805c-404e3216df8d.jpg',
        TitleRow1: 'Diskon',
        TitleRow2: 'Hingga 80%',
        Color: 'rgb(27, 156, 228)',
        ShowHotPromo: true,
        CardLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/cbc09b0d-2907-4a0f-aa15-9735d67b5736.png',
        Day: '3 DAYS LEFT',
    },
    {
        id: '4',
        MerchantLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/b7612001-d364-4f90-b7ca-2612a77a3950.png',
        Background: 'https://poininngcdn.azureedge.net/smartpromo/Promo/Background/576fe3ef-c79f-46b8-af75-d5adae3c1e54.jpg',
        TitleRow1: '10 Ayam',
        TitleRow2: '90 Rb',
        Color: 'rgb(191, 30, 26)',
        ShowHotPromo: true,
        CardLogo: '',
        Day: 'ENDS TOMORROW',
    },
    {
        id: '5',
        MerchantLogo: 'https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/cc02cccd-c9ec-4d90-898c-5720bed60a46.png',
        Background: 'https://poininngcdn.azureedge.net/smartpromo/Promo/Background/04dc4158-e9c9-40b3-b78c-3e51fa6cc396.jpg',
        TitleRow1: '9.9 Sale',
        TitleRow2: 'Discount 40%',
        Color: 'rgb(145, 110, 110)',
        ShowHotPromo: true,
        CardLogo: '',
        Day: '3 DAYS LEFT',
    },

];

const DummyPromoDataLong = [
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
    ...DummyPromoData,
];

export { DummyPromoData, DummyPromoDataLong }