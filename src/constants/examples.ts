export type DataType = {
  _id: string;
  title: string;
  category: string;
  styles: string[];
  mediums: string[];
  materials: string[];
  subjects: string[];
  description: string;
  dimensions: {
    depth: number;
    height: number;
    width: number;
  };
  creationYear: number;
  imageUrl: string;
  price: number;
  artistShort: {
    name: string;
    country: string;
    countryCode: string;
    fullname: string;
  };
  fullname: string;
  status: string;
  artistId: string;
  otherArtworkImages: string[];
};

const examples: DataType[] = [
  {
    _id: '6310ddf23ca3c501665784c3',
    title: 'Pop art mouse 2',
    category: 'PAINTING',
    styles: ['photorealism', 'pop art'],
    mediums: ['oil'],
    materials: ['canvas'],
    subjects: ['popular culture'],
    description: 'Painting from the Mice series, hand made on canvas, oil',
    dimensions: { depth: 3, height: 120, width: 120 },
    creationYear: 2021,
    imageUrl:
      'https://images.saatchiart.com/saatchi/655989/art/8520384/7584428-BHHQLFRA-7.jpg',
    price: 7700.0,
    artistShort: {
      name: 'sergey-piskunov62629',
      country: 'ukraine',
      countryCode: 'UA',
      fullname: 'Sergey Piskunov',
    },
    fullname: 'Pop art mouse 2',
    status: 'AVAILABLE',
    artistId: '6310ddf13ca3c50166575db3',
    otherArtworkImages: [
      'https://images.saatchiart.com/saatchi/1075196/art/7017939/6087273-DWGWCQBW-7.jpg',
      'https://images.saatchiart.com/saatchi/444994/art/1901625/1038904-7.jpg',
      'https://images.saatchiart.com/saatchi/1107749/art/4908645/3978469-EFMODCIV-7.jpg',
      'https://images.saatchiart.com/saatchi/781867/art/2726417/1796310-DKLXSCQM-7.jpg',
      'https://images.saatchiart.com/saatchi/440111/art/1792351/942416-7.jpg',
      'https://images.saatchiart.com/saatchi/127978/art/265532/127317-7.jpg',
      'https://images.saatchiart.com/saatchi/87106/art/8194943/7260798-OYXHUOJC-7.jpg',
      'https://images.saatchiart.com/saatchi/687321/art/2185699/1264426-7.jpg',
      'https://images.saatchiart.com/saatchi/1139/art/1452068/702151-7.jpg',
      'https://images.saatchiart.com/saatchi/1122859/art/5344943/4414757-HZVREJPO-7.jpg',
      'https://images.saatchiart.com/saatchi/1088523/art/4698249/3768081-YKAXWNCG-7.jpg',
      'https://images.saatchiart.com/saatchi/402834/art/3147707/2217598-QFXUQNAA-7.jpg',
      'https://images.saatchiart.com/saatchi/324328/art/540116/296245-7.jpg',
      'https://images.saatchiart.com/saatchi/717890/art/2269526/1344707-7.jpg',
      'https://images.saatchiart.com/saatchi/52390/art/3430082/2499969-OXFTNXHY-7.jpg',
      'https://images.saatchiart.com/saatchi/945992/art/6963301/6032637-FWVKJAMI-7.jpg',
      'https://images.saatchiart.com/saatchi/756212/art/2506921/1576904-7.jpg',
      'https://images.saatchiart.com/saatchi/837722/art/3130385/2200276-TJNQPTOE-7.jpg',
      'https://images.saatchiart.com/saatchi/163808/art/1808250/955451-7.jpg',
      'https://images.saatchiart.com/saatchi/90103/art/1402224/669465-7.jpg',
      'https://images.saatchiart.com/saatchi/302978/art/393654/205555-7.jpg',
      'https://images.saatchiart.com/saatchi/515758/art/2738548/1808441-PEIUSQDZ-7.jpg',
      'https://images.saatchiart.com/saatchi/77505/art/839336/425920-7.jpg',
      'https://images.saatchiart.com/saatchi/339291/art/544233/297662-7.jpg',
      'https://images.saatchiart.com/saatchi/201521/art/2005596/1127009-AAQGGNBU-7.jpg',
      'https://images.saatchiart.com/saatchi/244359/art/1383693/659125-WITNMROF-7.jpg',
      'https://images.saatchiart.com/saatchi/696780/art/2895293/1965186-FFZNKPVF-7.jpg',
      'https://images.saatchiart.com/saatchi/818628/art/4460653/3530493-KZHTAKNO-7.jpg',
      'https://images.saatchiart.com/saatchi/309567/art/2027102/1148582-7.jpg',
      'https://images.saatchiart.com/saatchi/994268/art/3823481/2893365-GEPBLYKT-7.jpg',
      'https://images.saatchiart.com/saatchi/316196/art/1915491/1042507-7.jpg',
      'https://images.saatchiart.com/saatchi/411829/art/1698021/879545-7.jpg',
      'https://images.saatchiart.com/saatchi/163813/art/2736204/1806097-LKUCIDXA-7.jpg',
      'https://images.saatchiart.com/saatchi/149950/art/4252113/3321961-IIEHKYXM-7.jpg',
      'https://images.saatchiart.com/saatchi/53925/art/5729173/4798975-VXVEXEGI-7.jpg',
      'https://images.saatchiart.com/saatchi/289735/art/337397/173170-7.jpg',
      'https://images.saatchiart.com/saatchi/1017473/art/8396482/7460842-BONTGHLG-7.jpg',
      'https://images.saatchiart.com/saatchi/804404/art/2755875/1825768-QNNHBXTL-7.jpg',
      'https://images.saatchiart.com/saatchi/767149/art/2595017/1664911-RRJXIROE-7.jpg',
      'https://images.saatchiart.com/saatchi/330747/art/1678848/858883-7.jpg',
      'https://images.saatchiart.com/saatchi/381/art/1336039/619032-KPQRVYLS-7.jpg',
      'https://images.saatchiart.com/saatchi/795266/art/2777250/1847143-TXIOATQG-7.jpg',
      'https://images.saatchiart.com/saatchi/843227/art/2961953/2031846-NWOZEWOJ-7.jpg',
      'https://images.saatchiart.com/saatchi/1095999/art/4752131/3821963-IDHRWJKP-7.jpg',
      'https://images.saatchiart.com/saatchi/325895/art/6485745/5555423-UOJVBAVO-7.jpg',
      'https://images.saatchiart.com/saatchi/64027/art/3067598/2137491-VGVGBUUK-7.jpg',
      'https://images.saatchiart.com/saatchi/60611/art/2190601/1269297-7.jpg',
      'https://images.saatchiart.com/saatchi/5316/art/2382335/1452463-7.jpg',
      'https://images.saatchiart.com/saatchi/1183009/art/5864845/4934643-QYRPDYNU-7.jpg',
      'https://images.saatchiart.com/saatchi/930630/art/5183325/4253145-LNPJTPEC-7.jpg',
    ],
  },
  {
    _id: '6310ddf23ca3c5016657845f',
    title: 'Le feu',
    category: 'PAINTING',
    styles: ['figurative'],
    mediums: ['acrylic', 'oil'],
    materials: ['wood'],
    subjects: ['body'],
    description: 'Tête head dans le feu fire huile acrylique sur bois',
    dimensions: { depth: 5.08, height: 99.06, width: 99.06 },
    creationYear: 2017,
    imageUrl:
      'https://images.saatchiart.com/saatchi/426209/art/3927331/2997207-LEWATDHP-7.jpg',
    price: 8500,
    artistShort: {
      name: 'philippe-cottin699537',
      country: '',
      countryCode: '',
      fullname: 'Philippe Cottin',
    },
    fullname: 'Le feu',
    status: 'AVAILABLE',
    artistId: '6310ddf13ca3c50166575d4f',
    otherArtworkImages: [
      'https://images.saatchiart.com/saatchi/21544/art/2875749/1945642-ZIGMIECQ-7.jpg',
      'https://images.saatchiart.com/saatchi/72505/art/1566244/779350-GTHZQIQV-7.jpg',
      'https://images.saatchiart.com/saatchi/692810/art/4524203/3594043-WOTRWQVL-7.jpg',
      'https://images.saatchiart.com/saatchi/248035/art/1630118/825179-7.jpg',
      'https://images.saatchiart.com/saatchi/11413/art/1274499/579708-7.jpg',
      'https://images.saatchiart.com/saatchi/390024/art/572727/314242-7.jpg',
      'https://images.saatchiart.com/saatchi/43914/art/7443587/6512757-KEVCFTLX-7.jpg',
      'https://images.saatchiart.com/saatchi/15403/art/145915/75501-7.jpg',
      'https://images.saatchiart.com/saatchi/33670/art/1678241/864708-7.jpg',
      'https://images.saatchiart.com/saatchi/738294/art/2713079/1782972-RWNDXUJH-7.jpg',
      'https://images.saatchiart.com/saatchi/974953/art/3713286/2783170-DLDTVXWP-7.jpg',
      'https://images.saatchiart.com/saatchi/900784/art/3760192/2830076-HDTPIQTT-7.jpg',
      'https://images.saatchiart.com/saatchi/22325/art/3044083/2113976-KTOWZTGY-7.jpg',
      'https://images.saatchiart.com/saatchi/46893/art/2892043/1961936-BJVMNNBV-7.jpg',
      'https://images.saatchiart.com/saatchi/422414/art/2832885/1902778-XNTXOGNX-7.jpg',
      'https://images.saatchiart.com/saatchi/809941/art/3212526/2282413-IXGXXNZJ-7.jpg',
      'https://images.saatchiart.com/saatchi/702876/art/2190723/1269419-LOINGWJC-7.jpg',
      'https://images.saatchiart.com/saatchi/782417/art/2695214/1765107-IHZUTVPU-7.jpg',
      'https://images.saatchiart.com/saatchi/955923/art/3690970/2760855-YIIOJVHT-7.jpg',
      'https://images.saatchiart.com/saatchi/916018/art/3483847/2553734-EFDCGNLR-7.jpg',
      'https://images.saatchiart.com/saatchi/314974/art/440279/233151-7.jpg',
      'https://images.saatchiart.com/saatchi/244087/art/398363/208470-7.jpg',
      'https://images.saatchiart.com/saatchi/7824/art/1621749/816774-7.jpg',
      'https://images.saatchiart.com/saatchi/539339/art/8050783/7117816-XRDWNGMO-7.jpg',
      'https://images.saatchiart.com/saatchi/298084/art/3408790/2478677-QFHCBBHC-7.jpg',
      'https://images.saatchiart.com/saatchi/22634/art/2366584/1436735-7.jpg',
      'https://images.saatchiart.com/saatchi/497905/art/1890358/1021809-JUYQOGPE-7.jpg',
      'https://images.saatchiart.com/saatchi/390390/art/3323817/2393704-XAOQBWBR-7.jpg',
      'https://images.saatchiart.com/saatchi/342941/art/523872/286764-7.jpg',
      'https://images.saatchiart.com/saatchi/736921/art/2712479/1782372-JLQEIAPA-7.jpg',
      'https://images.saatchiart.com/saatchi/1004588/art/7686403/6754637-LCMNGWDI-7.jpg',
      'https://images.saatchiart.com/saatchi/69883/art/7877619/6945400-GUPOPRDQ-7.jpg',
      'https://images.saatchiart.com/saatchi/808137/art/6530035/5599707-JEYFTVGT-7.jpg',
      'https://images.saatchiart.com/saatchi/543930/art/1872145/1013117-GPPUHEKK-7.jpg',
      'https://images.saatchiart.com/saatchi/72477/art/2641057/1710950-SXSVKWIY-7.jpg',
      'https://images.saatchiart.com/saatchi/1125546/art/5084331/4154153-EDEBZEZV-7.jpg',
      'https://images.saatchiart.com/saatchi/343389/art/1882665/1021908-7.jpg',
      'https://images.saatchiart.com/saatchi/285058/art/1645375/837384-7.jpg',
      'https://images.saatchiart.com/saatchi/6433/art/60467/54594-7.jpg',
      'https://images.saatchiart.com/saatchi/880348/art/3244576/2314463-RLAMFBUY-7.jpg',
      'https://images.saatchiart.com/saatchi/865245/art/3136697/2206588-INRXLLDQ-7.jpg',
      'https://images.saatchiart.com/saatchi/656572/art/2416435/1486505-7.jpg',
      'https://images.saatchiart.com/saatchi/72862/art/639668/343302-7.jpg',
      'https://images.saatchiart.com/saatchi/71977/art/1986140/1104665-7.jpg',
      'https://images.saatchiart.com/saatchi/218221/art/1373656/650376-7.jpg',
      'https://images.saatchiart.com/saatchi/1178859/art/5640273/4710081-JUGHSWIL-7.jpg',
      'https://images.saatchiart.com/saatchi/86307/art/1580845/793594-7.jpg',
      'https://images.saatchiart.com/saatchi/698150/art/4093908/3163761-ZNWKMWZO-7.jpg',
      'https://images.saatchiart.com/saatchi/53305/art/7387729/6456933-VDNMSYUU-7.jpg',
    ],
  },
];

export default examples;
