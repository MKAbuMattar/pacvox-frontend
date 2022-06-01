import styled from 'styled-components'

// https://codepen.io/kowlor/pen/ZYYQoy

export const SolarSystemContainer = styled.section`
  font: normal 1em/1.45em 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #1c2837 0%, #050608 100%);
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  .solar-syst {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 2px;
      top: -2px;
      background: white;
      box-shadow: 770px 794px 0 0px rgba(255, 255, 255, 0.252),
        1128px 1583px 0 0px rgba(255, 255, 255, 0.244),
        594px 1144px 0 0px rgba(255, 255, 255, 0.228),
        44px 1341px 0 0px rgba(255, 255, 255, 0.623),
        866px 940px 0 0px rgba(255, 255, 255, 0.743),
        951px 1046px 0 0px rgba(255, 255, 255, 0.072),
        55px 923px 0 0px rgba(255, 255, 255, 0.299),
        80px 89px 0 0px rgba(255, 255, 255, 0.605),
        139px 405px 0 0px rgba(255, 255, 255, 0.56),
        1410px 988px 0 0px rgba(255, 255, 255, 0.126),
        23px 775px 0 0px rgba(255, 255, 255, 0.603),
        251px 779px 0 0px rgba(255, 255, 255, 0.074),
        593px 383px 0 0px rgba(255, 255, 255, 0.786),
        546px 542px 0 0px rgba(255, 255, 255, 0.81),
        367px 1691px 0 0px rgba(255, 255, 255, 0.908),
        98px 1433px 0 0px rgba(255, 255, 255, 0.814),
        520px 266px 0 0px rgba(255, 255, 255, 0.524),
        234px 376px 0 0px rgba(255, 255, 255, 0.438),
        434px 671px 0 0px rgba(255, 255, 255, 0.154),
        958px 762px 0 0px rgba(255, 255, 255, 0.826),
        803px 348px 0 0px rgba(255, 255, 255, 0.713),
        757px 692px 0 0px rgba(255, 255, 255, 0.637),
        947px 790px 0 0px rgba(255, 255, 255, 0.254),
        962px 1729px 0 0px rgba(255, 255, 255, 0.59),
        555px 662px 0 0px rgba(255, 255, 255, 0.028),
        1459px 1086px 0 0px rgba(255, 255, 255, 0.463),
        935px 1182px 0 0px rgba(255, 255, 255, 0.789),
        979px 561px 0 0px rgba(255, 255, 255, 0.327),
        77px 1794px 0 0px rgba(255, 255, 255, 0.389),
        161px 81px 0 0px rgba(255, 255, 255, 0.763),
        1552px 262px 0 0px rgba(255, 255, 255, 0.973),
        363px 118px 0 0px rgba(255, 255, 255, 0.411),
        506px 1576px 0 0px rgba(255, 255, 255, 0.192),
        1416px 187px 0 0px rgba(255, 255, 255, 0.905),
        826px 1114px 0 0px rgba(255, 255, 255, 0.789),
        515px 1231px 0 0px rgba(255, 255, 255, 0.325),
        444px 1375px 0 0px rgba(255, 255, 255, 0.459),
        1445px 995px 0 0px rgba(255, 255, 255, 0.293),
        1px 1067px 0 0px rgba(255, 255, 255, 0.321),
        409px 1639px 0 0px rgba(255, 255, 255, 0.709),
        455px 579px 0 0px rgba(255, 255, 255, 0.354),
        1049px 1245px 0 0px rgba(255, 255, 255, 0.301),
        633px 1539px 0 0px rgba(255, 255, 255, 0.053),
        1466px 1367px 0 0px rgba(255, 255, 255, 0.449),
        229px 676px 0 0px rgba(255, 255, 255, 0.097),
        1679px 73px 0 0px rgba(255, 255, 255, 0.871),
        1538px 405px 0 0px rgba(255, 255, 255, 0.21),
        585px 1315px 0 0px rgba(255, 255, 255, 0.602),
        1240px 542px 0 0px rgba(255, 255, 255, 0.881),
        1223px 677px 0 0px rgba(255, 255, 255, 0.825),
        428px 1349px 0 0px rgba(255, 255, 255, 0.641),
        1336px 1183px 0 0px rgba(255, 255, 255, 0.991),
        1061px 988px 0 0px rgba(255, 255, 255, 0.016),
        1083px 1641px 0 0px rgba(255, 255, 255, 0.961),
        996px 772px 0 0px rgba(255, 255, 255, 0.666),
        742px 1390px 0 0px rgba(255, 255, 255, 0.658),
        1606px 329px 0 0px rgba(255, 255, 255, 0.426),
        576px 60px 0 0px rgba(255, 255, 255, 0.443),
        1276px 1017px 0 0px rgba(255, 255, 255, 0.575),
        690px 1148px 0 0px rgba(255, 255, 255, 0.748),
        916px 1671px 0 0px rgba(255, 255, 255, 0.174),
        574px 159px 0 0px rgba(255, 255, 255, 0.425),
        1571px 257px 0 0px rgba(255, 255, 255, 0.766),
        1024px 1066px 0 0px rgba(255, 255, 255, 0.843),
        1410px 400px 0 0px rgba(255, 255, 255, 0.566),
        630px 335px 0 0px rgba(255, 255, 255, 0.266),
        664px 76px 0 0px rgba(255, 255, 255, 0.561),
        1367px 1642px 0 0px rgba(255, 255, 255, 0.863),
        1259px 1032px 0 0px rgba(255, 255, 255, 0.905),
        875px 1562px 0 0px rgba(255, 255, 255, 0.316),
        291px 1443px 0 0px rgba(255, 255, 255, 0.582),
        1349px 1268px 0 0px rgba(255, 255, 255, 0.4),
        710px 397px 0 0px rgba(255, 255, 255, 0.881),
        340px 809px 0 0px rgba(255, 255, 255, 0.087),
        1523px 968px 0 0px rgba(255, 255, 255, 0.149),
        1720px 947px 0 0px rgba(255, 255, 255, 0.598),
        316px 1586px 0 0px rgba(255, 255, 255, 0.807),
        1424px 280px 0 0px rgba(255, 255, 255, 0.347),
        227px 1632px 0 0px rgba(255, 255, 255, 0.011),
        1154px 1622px 0 0px rgba(255, 255, 255, 0.28),
        554px 1237px 0 0px rgba(255, 255, 255, 0.845),
        1035px 1616px 0 0px rgba(255, 255, 255, 0.785),
        31px 360px 0 0px rgba(255, 255, 255, 0.273),
        420px 1221px 0 0px rgba(255, 255, 255, 0.848),
        1100px 50px 0 0px rgba(255, 255, 255, 0.237),
        606px 1124px 0 0px rgba(255, 255, 255, 0.593),
        771px 606px 0 0px rgba(255, 255, 255, 0.078),
        209px 472px 0 0px rgba(255, 255, 255, 0.456),
        1388px 673px 0 0px rgba(255, 255, 255, 0.083),
        77px 642px 0 0px rgba(255, 255, 255, 0.332),
        894px 1252px 0 0px rgba(255, 255, 255, 0.807),
        21px 702px 0 0px rgba(255, 255, 255, 0.673),
        736px 1460px 0 0px rgba(255, 255, 255, 0.936),
        302px 407px 0 0px rgba(255, 255, 255, 0.223),
        784px 1420px 0 0px rgba(255, 255, 255, 0.512),
        974px 1191px 0 0px rgba(255, 255, 255, 0.209),
        592px 492px 0 0px rgba(255, 255, 255, 0.552),
        163px 568px 0 0px rgba(255, 255, 255, 0.904),
        1455px 917px 0 0px rgba(255, 255, 255, 0.566),
        1445px 1103px 0 0px rgba(255, 255, 255, 0.606),
        580px 1715px 0 0px rgba(255, 255, 255, 0.538),
        682px 568px 0 0px rgba(255, 255, 255, 0.583),
        1768px 1681px 0 0px rgba(255, 255, 255, 0.805),
        1430px 491px 0 0px rgba(255, 255, 255, 0.194),
        1793px 136px 0 0px rgba(255, 255, 255, 0.787),
        1760px 710px 0 0px rgba(255, 255, 255, 0.78),
        587px 949px 0 0px rgba(255, 255, 255, 0.113),
        1413px 1442px 0 0px rgba(255, 255, 255, 0.706),
        1796px 73px 0 0px rgba(255, 255, 255, 0.716),
        906px 88px 0 0px rgba(255, 255, 255, 0.874),
        38px 493px 0 0px rgba(255, 255, 255, 0.087),
        193px 224px 0 0px rgba(255, 255, 255, 0.199),
        484px 360px 0 0px rgba(255, 255, 255, 0.837),
        152px 1599px 0 0px rgba(255, 255, 255, 0.639),
        458px 1047px 0 0px rgba(255, 255, 255, 0.907),
        252px 1192px 0 0px rgba(255, 255, 255, 0.154),
        247px 527px 0 0px rgba(255, 255, 255, 0.304),
        1656px 608px 0 0px rgba(255, 255, 255, 0.674),
        1244px 227px 0 0px rgba(255, 255, 255, 0.371),
        1564px 729px 0 0px rgba(255, 255, 255, 0.238),
        398px 1590px 0 0px rgba(255, 255, 255, 0.742),
        1623px 956px 0 0px rgba(255, 255, 255, 0.79),
        8px 443px 0 0px rgba(255, 255, 255, 0.913),
        360px 132px 0 0px rgba(255, 255, 255, 0.175),
        781px 1678px 0 0px rgba(255, 255, 255, 0.15),
        651px 852px 0 0px rgba(255, 255, 255, 0.761),
        1092px 1485px 0 0px rgba(255, 255, 255, 0.341),
        1308px 804px 0 0px rgba(255, 255, 255, 0.941),
        233px 1788px 0 0px rgba(255, 255, 255, 0.22),
        435px 492px 0 0px rgba(255, 255, 255, 0.482),
        392px 1443px 0 0px rgba(255, 255, 255, 0.638),
        979px 991px 0 0px rgba(255, 255, 255, 0.328),
        198px 256px 0 0px rgba(255, 255, 255, 0.262),
        901px 1756px 0 0px rgba(255, 255, 255, 0.402),
        663px 330px 0 0px rgba(255, 255, 255, 0.017),
        365px 871px 0 0px rgba(255, 255, 255, 0.213),
        581px 1381px 0 0px rgba(255, 255, 255, 0.589),
        1048px 1164px 0 0px rgba(255, 255, 255, 0.403),
        596px 1456px 0 0px rgba(255, 255, 255, 0.414),
        1057px 638px 0 0px rgba(255, 255, 255, 0.724),
        241px 465px 0 0px rgba(255, 255, 255, 0.889),
        1521px 156px 0 0px rgba(255, 255, 255, 0.794),
        776px 1294px 0 0px rgba(255, 255, 255, 0.054),
        1487px 903px 0 0px rgba(255, 255, 255, 0.194),
        540px 321px 0 0px rgba(255, 255, 255, 0.688),
        789px 580px 0 0px rgba(255, 255, 255, 0.047),
        1343px 381px 0 0px rgba(255, 255, 255, 0.934),
        324px 1596px 0 0px rgba(255, 255, 255, 0.561),
        327px 607px 0 0px rgba(255, 255, 255, 0.592),
        570px 993px 0 0px rgba(255, 255, 255, 0.234),
        25px 1652px 0 0px rgba(255, 255, 255, 0.529),
        1082px 171px 0 0px rgba(255, 255, 255, 0.409),
        295px 34px 0 0px rgba(255, 255, 255, 0.67),
        1169px 919px 0 0px rgba(255, 255, 255, 0.024),
        750px 1302px 0 0px rgba(255, 255, 255, 0.808),
        243px 1408px 0 0px rgba(255, 255, 255, 0.69),
        1450px 68px 0 0px rgba(255, 255, 255, 0.187),
        676px 1014px 0 0px rgba(255, 255, 255, 0.033),
        1723px 721px 0 0px rgba(255, 255, 255, 0.602),
        687px 865px 0 0px rgba(255, 255, 255, 0.304),
        1778px 403px 0 0px rgba(255, 255, 255, 0.467),
        1575px 1006px 0 0px rgba(255, 255, 255, 0.231),
        850px 1542px 0 0px rgba(255, 255, 255, 0.948),
        1218px 398px 0 0px rgba(255, 255, 255, 0.49),
        1696px 1726px 0 0px rgba(255, 255, 255, 0.804),
        1557px 265px 0 0px rgba(255, 255, 255, 0.434),
        1475px 543px 0 0px rgba(255, 255, 255, 0.402),
        1448px 468px 0 0px rgba(255, 255, 255, 0.364),
        1221px 1574px 0 0px rgba(255, 255, 255, 0.212),
        843px 203px 0 0px rgba(255, 255, 255, 0.881),
        1486px 355px 0 0px rgba(255, 255, 255, 0.658),
        1797px 506px 0 0px rgba(255, 255, 255, 0.819),
        1593px 1721px 0 0px rgba(255, 255, 255, 0.963),
        146px 1037px 0 0px rgba(255, 255, 255, 0.165),
        701px 1117px 0 0px rgba(255, 255, 255, 0.502),
        891px 668px 0 0px rgba(255, 255, 255, 0.557),
        1635px 1242px 0 0px rgba(255, 255, 255, 0.651),
        546px 18px 0 0px rgba(255, 255, 255, 0.598),
        968px 450px 0 0px rgba(255, 255, 255, 0.117),
        195px 1131px 0 0px rgba(255, 255, 255, 0.733),
        1107px 1054px 0 0px rgba(255, 255, 255, 0.402),
        446px 1513px 0 0px rgba(255, 255, 255, 0.952),
        395px 11px 0 0px rgba(255, 255, 255, 0.649),
        46px 625px 0 0px rgba(255, 255, 255, 0.124),
        1798px 477px 0 0px rgba(255, 255, 255, 0.994),
        1401px 693px 0 0px rgba(255, 255, 255, 0.419),
        585px 1618px 0 0px rgba(255, 255, 255, 0.703),
        1654px 1472px 0 0px rgba(255, 255, 255, 0.579),
        1302px 1503px 0 0px rgba(255, 255, 255, 0.596),
        1630px 1675px 0 0px rgba(255, 255, 255, 0.871),
        1099px 925px 0 0px rgba(255, 255, 255, 0.846),
        976px 1417px 0 0px rgba(255, 255, 255, 0.209),
        867px 1513px 0 0px rgba(255, 255, 255, 0.487),
        843px 1181px 0 0px rgba(255, 255, 255, 0.887),
        595px 939px 0 0px rgba(255, 255, 255, 0.477),
        1469px 1002px 0 0px rgba(255, 255, 255, 0.647),
        382px 370px 0 0px rgba(255, 255, 255, 0.29),
        1613px 530px 0 0px rgba(255, 255, 255, 0.13),
        642px 347px 0 0px rgba(255, 255, 255, 0.388),
        7px 481px 0 0px rgba(255, 255, 255, 0.91),
        950px 755px 0 0px rgba(255, 255, 255, 0.869),
        741px 1031px 0 0px rgba(255, 255, 255, 0.957),
        1074px 1019px 0 0px rgba(255, 255, 255, 0.997),
        1369px 427px 0 0px rgba(255, 255, 255, 0.544),
        886px 1487px 0 0px rgba(255, 255, 255, 0.636),
        1159px 1132px 0 0px rgba(255, 255, 255, 0.97),
        1030px 172px 0 0px rgba(255, 255, 255, 0.879),
        474px 805px 0 0px rgba(255, 255, 255, 0.687),
        794px 1141px 0 0px rgba(255, 255, 255, 0.296),
        1078px 803px 0 0px rgba(255, 255, 255, 0.819),
        1419px 569px 0 0px rgba(255, 255, 255, 0.821),
        1520px 1683px 0 0px rgba(255, 255, 255, 0.251),
        276px 1117px 0 0px rgba(255, 255, 255, 0.076),
        1514px 368px 0 0px rgba(255, 255, 255, 0.431),
        156px 1140px 0 0px rgba(255, 255, 255, 0.668),
        1001px 1477px 0 0px rgba(255, 255, 255, 0.928),
        740px 236px 0 0px rgba(255, 255, 255, 0.58),
        299px 850px 0 0px rgba(255, 255, 255, 0.1),
        1127px 1286px 0 0px rgba(255, 255, 255, 0.025),
        187px 526px 0 0px rgba(255, 255, 255, 0.148),
        1445px 1387px 0 0px rgba(255, 255, 255, 0.325),
        380px 877px 0 0px rgba(255, 255, 255, 0.905),
        455px 1540px 0 0px rgba(255, 255, 255, 0.889),
        249px 381px 0 0px rgba(255, 255, 255, 0.079),
        883px 1696px 0 0px rgba(255, 255, 255, 0.509),
        1654px 1330px 0 0px rgba(255, 255, 255, 0.547),
        864px 1781px 0 0px rgba(255, 255, 255, 0.302),
        1410px 1007px 0 0px rgba(255, 255, 255, 0.498),
        761px 467px 0 0px rgba(255, 255, 255, 0.933),
        882px 1391px 0 0px rgba(255, 255, 255, 0.735),
        521px 319px 0 0px rgba(255, 255, 255, 0.027),
        1082px 82px 0 0px rgba(255, 255, 255, 0.28),
        1042px 733px 0 0px rgba(255, 255, 255, 0.417),
        1497px 1276px 0 0px rgba(255, 255, 255, 0.137),
        961px 618px 0 0px rgba(255, 255, 255, 0.196),
        957px 1693px 0 0px rgba(255, 255, 255, 0.491),
        1504px 1405px 0 0px rgba(255, 255, 255, 0.748),
        783px 641px 0 0px rgba(255, 255, 255, 0.154),
        1744px 93px 0 0px rgba(255, 255, 255, 0.117),
        1368px 700px 0 0px rgba(255, 255, 255, 0.22),
        1584px 1186px 0 0px rgba(255, 255, 255, 0.54),
        238px 354px 0 0px rgba(255, 255, 255, 0.522),
        618px 932px 0 0px rgba(255, 255, 255, 0.157),
        636px 1732px 0 0px rgba(255, 255, 255, 0.324),
        174px 979px 0 0px rgba(255, 255, 255, 0.468),
        1159px 1439px 0 0px rgba(255, 255, 255, 0.855),
        458px 372px 0 0px rgba(255, 255, 255, 0.383),
        589px 758px 0 0px rgba(255, 255, 255, 0.295),
        1014px 1634px 0 0px rgba(255, 255, 255, 0.019),
        436px 120px 0 0px rgba(255, 255, 255, 0.363),
        170px 1695px 0 0px rgba(255, 255, 255, 0.136),
        691px 924px 0 0px rgba(255, 255, 255, 0.817),
        1489px 1236px 0 0px rgba(255, 255, 255, 0.245),
        1731px 240px 0 0px rgba(255, 255, 255, 0.499),
        403px 963px 0 0px rgba(255, 255, 255, 0.338),
        444px 999px 0 0px rgba(255, 255, 255, 0.188),
        1752px 1608px 0 0px rgba(255, 255, 255, 0.988),
        393px 1683px 0 0px rgba(255, 255, 255, 0.854),
        641px 758px 0 0px rgba(255, 255, 255, 0.108),
        511px 1465px 0 0px rgba(255, 255, 255, 0.259),
        2px 1754px 0 0px rgba(255, 255, 255, 0.655),
        223px 557px 0 0px rgba(255, 255, 255, 0.121),
        629px 1250px 0 0px rgba(255, 255, 255, 0.02),
        142px 205px 0 0px rgba(255, 255, 255, 0.344),
        491px 1271px 0 0px rgba(255, 255, 255, 0.519),
        937px 718px 0 0px rgba(255, 255, 255, 0.874),
        1274px 1491px 0 0px rgba(255, 255, 255, 0.827),
        493px 672px 0 0px rgba(255, 255, 255, 0.959),
        1206px 686px 0 0px rgba(255, 255, 255, 0.298),
        763px 244px 0 0px rgba(255, 255, 255, 0.118),
        1564px 988px 0 0px rgba(255, 255, 255, 0.807),
        572px 1293px 0 0px rgba(255, 255, 255, 1),
        964px 1472px 0 0px rgba(255, 255, 255, 0.281),
        629px 269px 0 0px rgba(255, 255, 255, 0.643),
        1333px 1324px 0 0px rgba(255, 255, 255, 0.511),
        790px 1417px 0 0px rgba(255, 255, 255, 0.745),
        691px 737px 0 0px rgba(255, 255, 255, 0.576),
        14px 406px 0 0px rgba(255, 255, 255, 0.919),
        932px 575px 0 0px rgba(255, 255, 255, 0.519),
        954px 1707px 0 0px rgba(255, 255, 255, 0.918),
        994px 258px 0 0px rgba(255, 255, 255, 0.751),
        959px 1404px 0 0px rgba(255, 255, 255, 0.117),
        1407px 403px 0 0px rgba(255, 255, 255, 0.54),
        100px 1536px 0 0px rgba(255, 255, 255, 0.035),
        1519px 1px 0 0px rgba(255, 255, 255, 0.543),
        1160px 292px 0 0px rgba(255, 255, 255, 0.891),
        1331px 1353px 0 0px rgba(255, 255, 255, 0.018),
        1562px 117px 0 0px rgba(255, 255, 255, 0.342),
        107px 1496px 0 0px rgba(255, 255, 255, 0.434),
        173px 384px 0 0px rgba(255, 255, 255, 0.746),
        407px 1086px 0 0px rgba(255, 255, 255, 0.812),
        1648px 1448px 0 0px rgba(255, 255, 255, 0.195),
        1579px 752px 0 0px rgba(255, 255, 255, 0.034),
        1480px 17px 0 0px rgba(255, 255, 255, 0.899),
        1066px 89px 0 0px rgba(255, 255, 255, 0.877),
        460px 445px 0 0px rgba(255, 255, 255, 0.867),
        846px 1581px 0 0px rgba(255, 255, 255, 0.733),
        220px 817px 0 0px rgba(255, 255, 255, 0.243),
        960px 1217px 0 0px rgba(255, 255, 255, 0.652),
        239px 881px 0 0px rgba(255, 255, 255, 0.366),
        820px 879px 0 0px rgba(255, 255, 255, 0.008),
        1694px 651px 0 0px rgba(255, 255, 255, 0.799),
        215px 34px 0 0px rgba(255, 255, 255, 0.055),
        873px 952px 0 0px rgba(255, 255, 255, 0.175),
        907px 613px 0 0px rgba(255, 255, 255, 0.701),
        1107px 1774px 0 0px rgba(255, 255, 255, 0.164),
        1601px 175px 0 0px rgba(255, 255, 255, 0.062),
        1159px 915px 0 0px rgba(255, 255, 255, 0.703),
        977px 1017px 0 0px rgba(255, 255, 255, 0.173),
        474px 1266px 0 0px rgba(255, 255, 255, 0.217),
        1637px 1668px 0 0px rgba(255, 255, 255, 0.762),
        1608px 1241px 0 0px rgba(255, 255, 255, 0.605),
        766px 613px 0 0px rgba(255, 255, 255, 0.011),
        1737px 1105px 0 0px rgba(255, 255, 255, 0.74),
        1422px 303px 0 0px rgba(255, 255, 255, 0.842),
        1295px 232px 0 0px rgba(255, 255, 255, 0.272),
        768px 1414px 0 0px rgba(255, 255, 255, 0.586),
        1271px 162px 0 0px rgba(255, 255, 255, 0.092),
        1275px 1600px 0 0px rgba(255, 255, 255, 0.849),
        704px 1660px 0 0px rgba(255, 255, 255, 0.723),
        143px 712px 0 0px rgba(255, 255, 255, 0.257),
        628px 1392px 0 0px rgba(255, 255, 255, 0.627),
        451px 1627px 0 0px rgba(255, 255, 255, 0.437),
        1205px 975px 0 0px rgba(255, 255, 255, 0.911),
        1472px 1473px 0 0px rgba(255, 255, 255, 0.102),
        1036px 856px 0 0px rgba(255, 255, 255, 0.371),
        344px 1559px 0 0px rgba(255, 255, 255, 0.72),
        520px 1230px 0 0px rgba(255, 255, 255, 0.671),
        70px 453px 0 0px rgba(255, 255, 255, 0.15),
        467px 402px 0 0px rgba(255, 255, 255, 0.599),
        889px 522px 0 0px rgba(255, 255, 255, 0.742),
        202px 1736px 0 0px rgba(255, 255, 255, 0.936),
        493px 1584px 0 0px rgba(255, 255, 255, 0.104),
        1024px 1370px 0 0px rgba(255, 255, 255, 0.564),
        1593px 725px 0 0px rgba(255, 255, 255, 0.318),
        198px 1274px 0 0px rgba(255, 255, 255, 1),
        840px 1459px 0 0px rgba(255, 255, 255, 0.376),
        195px 1333px 0 0px rgba(255, 255, 255, 0.071),
        1392px 1089px 0 0px rgba(255, 255, 255, 0.792),
        321px 503px 0 0px rgba(255, 255, 255, 0.701),
        89px 938px 0 0px rgba(255, 255, 255, 0.822),
        62px 1447px 0 0px rgba(255, 255, 255, 0.149),
        807px 1492px 0 0px rgba(255, 255, 255, 0.919),
        1062px 328px 0 0px rgba(255, 255, 255, 0.622),
        193px 864px 0 0px rgba(255, 255, 255, 0.729),
        535px 1047px 0 0px rgba(255, 255, 255, 0.836),
        944px 1381px 0 0px rgba(255, 255, 255, 0.506),
        296px 1153px 0 0px rgba(255, 255, 255, 0.14),
        776px 234px 0 0px rgba(255, 255, 255, 0.233),
        152px 858px 0 0px rgba(255, 255, 255, 0.849),
        190px 1010px 0 0px rgba(255, 255, 255, 0.906),
        1523px 622px 0 0px rgba(255, 255, 255, 0.088),
        1082px 176px 0 0px rgba(255, 255, 255, 0.92),
        755px 1216px 0 0px rgba(255, 255, 255, 0.086),
        1094px 1696px 0 0px rgba(255, 255, 255, 0.626),
        554px 1792px 0 0px rgba(255, 255, 255, 0.786),
        1264px 228px 0 0px rgba(255, 255, 255, 0.239),
        1124px 5px 0 0px rgba(255, 255, 255, 0.799),
        1047px 1489px 0 0px rgba(255, 255, 255, 0.187),
        1404px 252px 0 0px rgba(255, 255, 255, 0.255),
        1313px 1534px 0 0px rgba(255, 255, 255, 0.931),
        584px 1476px 0 0px rgba(255, 255, 255, 0.882),
        1209px 777px 0 0px rgba(255, 255, 255, 0.316),
        1014px 148px 0 0px rgba(255, 255, 255, 0.839),
        270px 1272px 0 0px rgba(255, 255, 255, 0.129),
        1249px 924px 0 0px rgba(255, 255, 255, 0.458),
        900px 1236px 0 0px rgba(255, 255, 255, 0.059),
        1103px 47px 0 0px rgba(255, 255, 255, 0.268),
        96px 204px 0 0px rgba(255, 255, 255, 0.456),
        1243px 1363px 0 0px rgba(255, 255, 255, 0.586),
        1700px 844px 0 0px rgba(255, 255, 255, 0.209),
        1577px 597px 0 0px rgba(255, 255, 255, 0.917),
        31px 794px 0 0px rgba(255, 255, 255, 0.41),
        938px 1595px 0 0px rgba(255, 255, 255, 0.29),
        754px 474px 0 0px rgba(255, 255, 255, 0.615),
        941px 460px 0 0px rgba(255, 255, 255, 0.6),
        1656px 674px 0 0px rgba(255, 255, 255, 0.1),
        1702px 679px 0 0px rgba(255, 255, 255, 0.413),
        600px 857px 0 0px rgba(255, 255, 255, 0.749),
        266px 330px 0 0px rgba(255, 255, 255, 0.411),
        251px 18px 0 0px rgba(255, 255, 255, 0.374),
        1700px 977px 0 0px rgba(255, 255, 255, 0.052),
        1267px 655px 0 0px rgba(255, 255, 255, 0.367),
        169px 1095px 0 0px rgba(255, 255, 255, 0.627),
        852px 1800px 0 0px rgba(255, 255, 255, 0.369),
        1360px 1570px 0 0px rgba(255, 255, 255, 0.05),
        1700px 518px 0 0px rgba(255, 255, 255, 0.545),
        1749px 160px 0 0px rgba(255, 255, 255, 0.485),
        506px 1062px 0 0px rgba(255, 255, 255, 0.589),
        1127px 1625px 0 0px rgba(255, 255, 255, 0.906),
        714px 933px 0 0px rgba(255, 255, 255, 0.808),
        52px 385px 0 0px rgba(255, 255, 255, 0.364),
        1436px 221px 0 0px rgba(255, 255, 255, 0.423),
        523px 972px 0 0px rgba(255, 255, 255, 0.813),
        1609px 288px 0 0px rgba(255, 255, 255, 0.133),
        1301px 1185px 0 0px rgba(255, 255, 255, 0.759),
        1249px 1388px 0 0px rgba(255, 255, 255, 0.601),
        627px 1505px 0 0px rgba(255, 255, 255, 0.192),
        649px 328px 0 0px rgba(255, 255, 255, 0.559),
        42px 797px 0 0px rgba(255, 255, 255, 0.397),
        1139px 1156px 0 0px rgba(255, 255, 255, 0.455),
        591px 896px 0 0px rgba(255, 255, 255, 0.008),
        1387px 958px 0 0px rgba(255, 255, 255, 0.896),
        621px 43px 0 0px rgba(255, 255, 255, 0.076),
        1226px 263px 0 0px rgba(255, 255, 255, 0.852),
        138px 1078px 0 0px rgba(255, 255, 255, 0.348),
        720px 887px 0 0px rgba(255, 255, 255, 0.564),
        1681px 1669px 0 0px rgba(255, 255, 255, 0.26),
        721px 1536px 0 0px rgba(255, 255, 255, 0.727),
        839px 1612px 0 0px rgba(255, 255, 255, 0.753),
        1751px 1272px 0 0px rgba(255, 255, 255, 0.775),
        669px 637px 0 0px rgba(255, 255, 255, 0.578),
        1457px 1544px 0 0px rgba(255, 255, 255, 0.393),
        1371px 84px 0 0px rgba(255, 255, 255, 0.427),
        325px 1721px 0 0px rgba(255, 255, 255, 0.808),
        679px 253px 0 0px rgba(255, 255, 255, 0.313),
        1589px 1004px 0 0px rgba(255, 255, 255, 0.615),
        1066px 1522px 0 0px rgba(255, 255, 255, 0.145),
        865px 1143px 0 0px rgba(255, 255, 255, 0.236),
        1171px 587px 0 0px rgba(255, 255, 255, 0.255),
        1397px 1714px 0 0px rgba(255, 255, 255, 0.124),
        1550px 97px 0 0px rgba(255, 255, 255, 0.653),
        1142px 774px 0 0px rgba(255, 255, 255, 0.24),
        390px 749px 0 0px rgba(255, 255, 255, 0.666),
        480px 377px 0 0px rgba(255, 255, 255, 0.79),
        538px 56px 0 0px rgba(255, 255, 255, 0.086),
        1041px 1679px 0 0px rgba(255, 255, 255, 0.712),
        1408px 1755px 0 0px rgba(255, 255, 255, 0.805),
        3px 410px 0 0px rgba(255, 255, 255, 0.427),
        135px 1596px 0 0px rgba(255, 255, 255, 0.454),
        891px 237px 0 0px rgba(255, 255, 255, 0.662),
        924px 61px 0 0px rgba(255, 255, 255, 0.084),
        1641px 120px 0 0px rgba(255, 255, 255, 0.297),
        1056px 1077px 0 0px rgba(255, 255, 255, 0.627),
        1614px 729px 0 0px rgba(255, 255, 255, 0.554),
        345px 1686px 0 0px rgba(255, 255, 255, 0.881),
        408px 1455px 0 0px rgba(255, 255, 255, 0.498),
        1055px 301px 0 0px rgba(255, 255, 255, 0.905),
        234px 1192px 0 0px rgba(255, 255, 255, 0.018),
        736px 256px 0 0px rgba(255, 255, 255, 0.944),
        712px 1365px 0 0px rgba(255, 255, 255, 0.98),
        815px 1312px 0 0px rgba(255, 255, 255, 0.183),
        221px 746px 0 0px rgba(255, 255, 255, 0.305),
        1117px 853px 0 0px rgba(255, 255, 255, 0.747),
        1692px 1748px 0 0px rgba(255, 255, 255, 0.461),
        773px 1327px 0 0px rgba(255, 255, 255, 0.419),
        1507px 1438px 0 0px rgba(255, 255, 255, 0.299),
        451px 519px 0 0px rgba(255, 255, 255, 0.402),
        904px 1301px 0 0px rgba(255, 255, 255, 0.128),
        955px 1412px 0 0px rgba(255, 255, 255, 0.823),
        65px 233px 0 0px rgba(255, 255, 255, 0.662),
        1009px 1479px 0 0px rgba(255, 255, 255, 0.187),
        823px 897px 0 0px rgba(255, 255, 255, 0.834),
        1655px 75px 0 0px rgba(255, 255, 255, 0.577),
        1029px 1371px 0 0px rgba(255, 255, 255, 0.643),
        618px 1780px 0 0px rgba(255, 255, 255, 0.078),
        1459px 86px 0 0px rgba(255, 255, 255, 0.531),
        632px 439px 0 0px rgba(255, 255, 255, 0.156),
        1503px 421px 0 0px rgba(255, 255, 255, 0.787),
        1406px 1212px 0 0px rgba(255, 255, 255, 0.486),
        265px 1143px 0 0px rgba(255, 255, 255, 0.328),
        1688px 372px 0 0px rgba(255, 255, 255, 0.577),
        1441px 1708px 0 0px rgba(255, 255, 255, 0.367),
        751px 1492px 0 0px rgba(255, 255, 255, 0.071),
        704px 392px 0 0px rgba(255, 255, 255, 0.7),
        648px 23px 0 0px rgba(255, 255, 255, 0.072),
        859px 1530px 0 0px rgba(255, 255, 255, 0.511),
        1015px 1671px 0 0px rgba(255, 255, 255, 0.912),
        1761px 28px 0 0px rgba(255, 255, 255, 0.118),
        618px 1212px 0 0px rgba(255, 255, 255, 0.387),
        1038px 690px 0 0px rgba(255, 255, 255, 0.519),
        1675px 1483px 0 0px rgba(255, 255, 255, 0.829),
        145px 1058px 0 0px rgba(255, 255, 255, 0.242),
        931px 975px 0 0px rgba(255, 255, 255, 0.925),
        950px 342px 0 0px rgba(255, 255, 255, 0.337),
        1636px 1709px 0 0px rgba(255, 255, 255, 0.945),
        1038px 1463px 0 0px rgba(255, 255, 255, 0.581),
        792px 734px 0 0px rgba(255, 255, 255, 0.199),
        1186px 450px 0 0px rgba(255, 255, 255, 0.818),
        1286px 1550px 0 0px rgba(255, 255, 255, 0.683),
        1366px 53px 0 0px rgba(255, 255, 255, 0.849),
        1505px 1452px 0 0px rgba(255, 255, 255, 0.313),
        241px 1159px 0 0px rgba(255, 255, 255, 0.168),
        4px 389px 0 0px rgba(255, 255, 255, 0.78),
        650px 152px 0 0px rgba(255, 255, 255, 0.754),
        1072px 1486px 0 0px rgba(255, 255, 255, 0.268),
        1616px 1708px 0 0px rgba(255, 255, 255, 0.657),
        639px 1651px 0 0px rgba(255, 255, 255, 0.4),
        658px 1686px 0 0px rgba(255, 255, 255, 0.805),
        1112px 1373px 0 0px rgba(255, 255, 255, 0.923),
        1208px 241px 0 0px rgba(255, 255, 255, 1),
        894px 368px 0 0px rgba(255, 255, 255, 0.354),
        137px 1671px 0 0px rgba(255, 255, 255, 0.853),
        1026px 1652px 0 0px rgba(255, 255, 255, 0.937),
        1018px 1465px 0 0px rgba(255, 255, 255, 0.624),
        1573px 1405px 0 0px rgba(255, 255, 255, 0.322),
        584px 653px 0 0px rgba(255, 255, 255, 0.094),
        948px 882px 0 0px rgba(255, 255, 255, 0.911),
        748px 623px 0 0px rgba(255, 255, 255, 0.197),
        1235px 256px 0 0px rgba(255, 255, 255, 0.602);
      border-radius: 100px;
    }
    div {
      border-radius: 1000px;
      top: 50%;
      left: 50%;
      position: absolute;
      z-index: 999;
      &:not(.sun) {
        border: 1px solid rgba(102, 166, 229, 0.12);
        &:before {
          left: 50%;
          border-radius: 100px;
          content: '';
          position: absolute;
        }
      }
      &:not(.asteroids-belt) {
        &:before {
          box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .sun {
    background: radial-gradient(
      ellipse at center,
      #ffd000 1%,
      #f9b700 39%,
      #f9b700 39%,
      #e06317 100%
    );
    height: 40px;
    width: 40px;
    margin-top: -20px;
    margin-left: -20px;
    background-clip: padding-box;
    border: 0 !important;
    background-position: -28px -103px;
    background-size: 175%;
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
      0 0 22px 11px rgba(255, 203, 0, 0.13);
  }
  .mercury {
    height: 70px;
    width: 70px;
    margin-top: -35px;
    margin-left: -35px;
    -webkit-animation: orb 7.1867343561s linear infinite;
    animation: orb 7.1867343561s linear infinite;
    &:before {
      height: 4px;
      width: 4px;
      background: #9f5e26;
      margin-top: -2px;
      margin-left: -2px;
    }
  }
  .venus {
    height: 100px;
    width: 100px;
    margin-top: -50px;
    margin-left: -50px;
    -webkit-animation: orb 18.4555338265s linear infinite;
    animation: orb 18.4555338265s linear infinite;
    &:before {
      height: 8px;
      width: 8px;
      background: #beb768;
      margin-top: -4px;
      margin-left: -4px;
    }
  }
  .earth {
    height: 145px;
    width: 145px;
    margin-top: -72.5px;
    margin-left: -72.5px;
    -webkit-animation: orb 30s linear infinite;
    animation: orb 30s linear infinite;
    &:before {
      height: 6px;
      width: 6px;
      background: #11abe9;
      margin-top: -3px;
      margin-left: -3px;
    }
    &:after {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 50%;
      top: 0px;
      margin-left: -9px;
      margin-top: -9px;
      border-radius: 100px;
      box-shadow: 0 -10px 0 -8px grey;
      -webkit-animation: orb 2.2440352158s linear infinite;
      animation: orb 2.2440352158s linear infinite;
    }
  }
  .mars {
    height: 190px;
    width: 190px;
    margin-top: -95px;
    margin-left: -95px;
    -webkit-animation: orb 56.4261314589s linear infinite;
    animation: orb 56.4261314589s linear infinite;
    &:before {
      height: 6px;
      width: 6px;
      background: #cf3921;
      margin-top: -3px;
      margin-left: -3px;
    }
  }
  .jupiter {
    height: 340px;
    width: 340px;
    margin-top: -170px;
    margin-left: -170px;
    -webkit-animation: orb 355.7228171013s linear infinite;
    animation: orb 355.7228171013s linear infinite;
    &:before {
      height: 18px;
      width: 18px;
      background: #c76e2a;
      margin-top: -9px;
      margin-left: -9px;
    }
  }
  .saturn {
    height: 440px;
    width: 440px;
    margin-top: -220px;
    margin-left: -220px;
    -webkit-animation: orb 882.6952471456s linear infinite;
    animation: orb 882.6952471456s linear infinite;
    &:before {
      height: 12px;
      width: 12px;
      background: #e7c194;
      margin-top: -6px;
      margin-left: -6px;
    }
    &:after {
      position: absolute;
      content: '';
      height: 2.34%;
      width: 4.676%;
      left: 50%;
      top: 0px;
      transform: rotateZ(-52deg);
      margin-left: -2.3%;
      margin-top: -1.2%;
      border-radius: 50% 50% 50% 50%;
      box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
      -webkit-animation: orb 882.6952471456s linear infinite;
      animation: orb 882.6952471456s linear infinite;
      animation-direction: reverse;
      transform-origin: 52% 60%;
    }
  }
  .uranus {
    height: 520px;
    width: 520px;
    margin-top: -260px;
    margin-left: -260px;
    -webkit-animation: orb 2512.4001967933s linear infinite;
    animation: orb 2512.4001967933s linear infinite;
    &:before {
      height: 10px;
      width: 10px;
      background: #b5e3e3;
      margin-top: -5px;
      margin-left: -5px;
    }
  }
  .neptune {
    height: 630px;
    width: 630px;
    margin-top: -315px;
    margin-left: -315px;
    -webkit-animation: orb 4911.7838624549s linear infinite;
    animation: orb 4911.7838624549s linear infinite;
    &:before {
      height: 10px;
      width: 10px;
      background: #175e9e;
      margin-top: -5px;
      margin-left: -5px;
    }
  }
  .asteroids-belt {
    opacity: 0.7;
    border-color: transparent !important;
    height: 300px;
    width: 300px;
    margin-top: -150px;
    margin-left: -150px;
    -webkit-animation: orb 179.9558282773s linear infinite;
    animation: orb 179.9558282773s linear infinite;
    overflow: hidden;
    &:before {
      top: 50%;
      height: 210px;
      width: 210px;
      margin-left: -105px;
      margin-top: -105px;
      background: transparent;
      border-radius: 140px !important;
      box-shadow: 144px -121px 0 -104px rgba(255, 255, 255, 0.063),
        26px 123px 0 -104px rgba(255, 255, 255, 0.771),
        66px 101px 0 -104px rgba(255, 255, 255, 0.868),
        108px 33px 0 -104px rgba(255, 255, 255, 0.6),
        29px -52px 0 -104px rgba(255, 255, 255, 0.699),
        -95px -81px 0 -104px rgba(255, 255, 255, 0.406),
        -105px -102px 0 -104px rgba(255, 255, 255, 0.147),
        -113px -51px 0 -104px rgba(255, 255, 255, 0.26),
        43px 66px 0 -104px rgba(255, 255, 255, 0.599),
        137px 29px 0 -104px rgba(255, 255, 255, 0.363),
        -85px 90px 0 -104px rgba(255, 255, 255, 0.417),
        -115px 124px 0 -104px rgba(255, 255, 255, 0.637),
        -140px 106px 0 -104px rgba(255, 255, 255, 0.337),
        -79px 52px 0 -104px rgba(255, 255, 255, 0.815),
        -76px 87px 0 -104px rgba(255, 255, 255, 0.262),
        -137px 92px 0 -104px rgba(255, 255, 255, 0.933),
        -86px -11px 0 -104px rgba(255, 255, 255, 0.311),
        -55px -90px 0 -104px rgba(255, 255, 255, 0.112),
        43px 46px 0 -104px rgba(255, 255, 255, 0.668),
        33px -114px 0 -104px rgba(255, 255, 255, 0.892),
        -97px 69px 0 -104px rgba(255, 255, 255, 0.272),
        -18px 79px 0 -104px rgba(255, 255, 255, 0.26),
        144px 33px 0 -104px rgba(255, 255, 255, 0.725),
        34px 6px 0 -104px rgba(255, 255, 255, 0.794),
        -90px -101px 0 -104px rgba(255, 255, 255, 0.969),
        -46px -111px 0 -104px rgba(255, 255, 255, 0.023),
        -84px -12px 0 -104px rgba(255, 255, 255, 0.902),
        -137px 20px 0 -104px rgba(255, 255, 255, 0.831),
        -39px 37px 0 -104px rgba(255, 255, 255, 0.53),
        97px -64px 0 -104px rgba(255, 255, 255, 0.468),
        43px 84px 0 -104px rgba(255, 255, 255, 0.118),
        -117px 25px 0 -104px rgba(255, 255, 255, 0.754),
        -95px 1px 0 -104px rgba(255, 255, 255, 0.055),
        -24px 33px 0 -104px rgba(255, 255, 255, 0.654),
        -101px -2px 0 -104px rgba(255, 255, 255, 0.354),
        135px -112px 0 -104px rgba(255, 255, 255, 0.456),
        -57px -111px 0 -104px rgba(255, 255, 255, 0.105),
        141px -2px 0 -104px rgba(255, 255, 255, 0.561),
        -87px -136px 0 -104px rgba(255, 255, 255, 0.237),
        -142px -49px 0 -104px rgba(255, 255, 255, 0.784),
        120px 92px 0 -104px rgba(255, 255, 255, 0.429),
        75px -32px 0 -104px rgba(255, 255, 255, 0.239),
        -68px 102px 0 -104px rgba(255, 255, 255, 0.676),
        -117px 25px 0 -104px rgba(255, 255, 255, 0.572),
        62px -36px 0 -104px rgba(255, 255, 255, 0.268),
        95px 50px 0 -104px rgba(255, 255, 255, 0.147),
        -73px 31px 0 -104px rgba(255, 255, 255, 0.746),
        -40px -31px 0 -104px rgba(255, 255, 255, 0.144),
        -120px -13px 0 -104px rgba(255, 255, 255, 0.043),
        -64px 90px 0 -104px rgba(255, 255, 255, 0.546),
        -56px -90px 0 -104px rgba(255, 255, 255, 0.941),
        -129px -105px 0 -104px rgba(255, 255, 255, 0.118),
        116px -93px 0 -104px rgba(255, 255, 255, 0.147),
        31px 124px 0 -104px rgba(255, 255, 255, 0.19),
        136px -83px 0 -104px rgba(255, 255, 255, 0.032),
        -103px -98px 0 -104px rgba(255, 255, 255, 0.731),
        4px -64px 0 -104px rgba(255, 255, 255, 0.223),
        -61px -28px 0 -104px rgba(255, 255, 255, 0.854),
        52px -55px 0 -104px rgba(255, 255, 255, 0.203),
        -67px -93px 0 -104px rgba(255, 255, 255, 0.569),
        -72px -138px 0 -104px rgba(255, 255, 255, 0.589),
        -16px -11px 0 -104px rgba(255, 255, 255, 0.04),
        -12px -42px 0 -104px rgba(255, 255, 255, 0.852),
        42px 76px 0 -104px rgba(255, 255, 255, 0.182),
        -47px 140px 0 -104px rgba(255, 255, 255, 0.669),
        -100px 132px 0 -104px rgba(255, 255, 255, 0.245),
        11px 27px 0 -104px rgba(255, 255, 255, 0.27),
        124px 23px 0 -104px rgba(255, 255, 255, 0.262),
        9px 33px 0 -104px rgba(255, 255, 255, 0.426),
        -6px 134px 0 -104px rgba(255, 255, 255, 0.548),
        -59px 83px 0 -104px rgba(255, 255, 255, 0.179),
        -128px -8px 0 -104px rgba(255, 255, 255, 0.621),
        -136px 134px 0 -104px rgba(255, 255, 255, 0.454),
        -3px 53px 0 -104px rgba(255, 255, 255, 0.405),
        10px 31px 0 -104px rgba(255, 255, 255, 0.158),
        58px -59px 0 -104px rgba(255, 255, 255, 0.587),
        142px -110px 0 -104px rgba(255, 255, 255, 0.473),
        -74px 56px 0 -104px rgba(255, 255, 255, 0.667),
        -4px -120px 0 -104px rgba(255, 255, 255, 0.646),
        12px -127px 0 -104px rgba(255, 255, 255, 0.164),
        84px -21px 0 -104px rgba(255, 255, 255, 0.347),
        -143px -110px 0 -104px rgba(255, 255, 255, 0.587),
        120px -120px 0 -104px rgba(255, 255, 255, 0.508),
        -81px 120px 0 -104px rgba(255, 255, 255, 0.387),
        100px -27px 0 -104px rgba(255, 255, 255, 0.548),
        109px -48px 0 -104px rgba(255, 255, 255, 0.349),
        88px -59px 0 -104px rgba(255, 255, 255, 0.287),
        -26px 119px 0 -104px rgba(255, 255, 255, 0.845),
        108px 98px 0 -104px rgba(255, 255, 255, 0.195),
        38px 93px 0 -104px rgba(255, 255, 255, 0.943),
        98px -8px 0 -104px rgba(255, 255, 255, 0.779),
        -51px 63px 0 -104px rgba(255, 255, 255, 0.476),
        118px -97px 0 -104px rgba(255, 255, 255, 0.724),
        145px 41px 0 -104px rgba(255, 255, 255, 0.995),
        21px 119px 0 -104px rgba(255, 255, 255, 0.652),
        64px 70px 0 -104px rgba(255, 255, 255, 0.278),
        -120px -118px 0 -104px rgba(255, 255, 255, 0.167),
        49px 50px 0 -104px rgba(255, 255, 255, 0.175),
        -107px -118px 0 -104px rgba(255, 255, 255, 0.911),
        -31px 41px 0 -104px rgba(255, 255, 255, 0.292),
        34px 45px 0 -104px rgba(255, 255, 255, 0.358),
        93px -108px 0 -104px rgba(255, 255, 255, 0.572),
        133px 125px 0 -104px rgba(255, 255, 255, 0.857),
        -58px 8px 0 -104px rgba(255, 255, 255, 0.301),
        -108px 136px 0 -104px rgba(255, 255, 255, 0.506),
        112px 106px 0 -104px rgba(255, 255, 255, 0.554),
        -34px -95px 0 -104px rgba(255, 255, 255, 0.544),
        47px 38px 0 -104px rgba(255, 255, 255, 0.707),
        -112px 54px 0 -104px rgba(255, 255, 255, 0.943),
        -105px 28px 0 -104px rgba(255, 255, 255, 0.246),
        98px 64px 0 -104px rgba(255, 255, 255, 0.438),
        125px 127px 0 -104px rgba(255, 255, 255, 0.815),
        7px -126px 0 -104px rgba(255, 255, 255, 0.186),
        -125px -124px 0 -104px rgba(255, 255, 255, 0.256),
        97px 135px 0 -104px rgba(255, 255, 255, 0.972),
        71px 12px 0 -104px rgba(255, 255, 255, 0.422),
        -129px -33px 0 -104px rgba(255, 255, 255, 0.371),
        -143px -53px 0 -104px rgba(255, 255, 255, 0.576),
        116px -61px 0 -104px rgba(255, 255, 255, 0.106),
        7px -18px 0 -104px rgba(255, 255, 255, 0.064),
        -42px 68px 0 -104px rgba(255, 255, 255, 0.635),
        117px -128px 0 -104px rgba(255, 255, 255, 0.519),
        22px -124px 0 -104px rgba(255, 255, 255, 0.706),
        -76px -108px 0 -104px rgba(255, 255, 255, 0.078),
        33px -132px 0 -104px rgba(255, 255, 255, 0.608),
        144px 30px 0 -104px rgba(255, 255, 255, 0.941),
        88px -14px 0 -104px rgba(255, 255, 255, 0.206),
        -29px 21px 0 -104px rgba(255, 255, 255, 0.58),
        -28px 101px 0 -104px rgba(255, 255, 255, 0.918),
        -5px -74px 0 -104px rgba(255, 255, 255, 0.409),
        128px -86px 0 -104px rgba(255, 255, 255, 0.792),
        30px -127px 0 -104px rgba(255, 255, 255, 0.253),
        77px -124px 0 -104px rgba(255, 255, 255, 0.697),
        -140px -87px 0 -104px rgba(255, 255, 255, 0.329),
        125px -66px 0 -104px rgba(255, 255, 255, 0.447),
        -128px 81px 0 -104px rgba(255, 255, 255, 0.372),
        -52px -43px 0 -104px rgba(255, 255, 255, 0.783),
        -30px -17px 0 -104px rgba(255, 255, 255, 0.277),
        23px 118px 0 -104px rgba(255, 255, 255, 0.647),
        10px -80px 0 -104px rgba(255, 255, 255, 0.167),
        97px 110px 0 -104px rgba(255, 255, 255, 0.248),
        -42px 2px 0 -104px rgba(255, 255, 255, 0.705),
        145px 75px 0 -104px rgba(255, 255, 255, 0.313),
        81px -81px 0 -104px rgba(255, 255, 255, 0.489),
        -101px -85px 0 -104px rgba(255, 255, 255, 0.066),
        114px -56px 0 -104px rgba(255, 255, 255, 0.779),
        99px 145px 0 -104px rgba(255, 255, 255, 0.89),
        -22px 60px 0 -104px rgba(255, 255, 255, 0.986),
        -102px 121px 0 -104px rgba(255, 255, 255, 0.716),
        -52px -30px 0 -104px rgba(255, 255, 255, 0.82),
        -88px -87px 0 -104px rgba(255, 255, 255, 0.791),
        138px -16px 0 -104px rgba(255, 255, 255, 0.514),
        90px -121px 0 -104px rgba(255, 255, 255, 0.581),
        18px 7px 0 -104px rgba(255, 255, 255, 0.94),
        -62px 13px 0 -104px rgba(255, 255, 255, 0.217),
        51px -99px 0 -104px rgba(255, 255, 255, 0.683),
        116px 74px 0 -104px rgba(255, 255, 255, 0.439),
        86px -114px 0 -104px rgba(255, 255, 255, 0.615),
        45px -135px 0 -104px rgba(255, 255, 255, 0.585),
        -3px 0px 0 -104px rgba(255, 255, 255, 0.696),
        -138px -133px 0 -104px rgba(255, 255, 255, 0.685),
        90px 50px 0 -104px rgba(255, 255, 255, 0.337),
        -97px 135px 0 -104px rgba(255, 255, 255, 0.116),
        141px -114px 0 -104px rgba(255, 255, 255, 0.725),
        -121px -44px 0 -104px rgba(255, 255, 255, 0.925),
        -98px -20px 0 -104px rgba(255, 255, 255, 0.275),
        109px 89px 0 -104px rgba(255, 255, 255, 0.782),
        -119px -124px 0 -104px rgba(255, 255, 255, 0.69),
        -78px -119px 0 -104px rgba(255, 255, 255, 0.859),
        126px 43px 0 -104px rgba(255, 255, 255, 0.661),
        -29px 118px 0 -104px rgba(255, 255, 255, 0.945),
        -12px 8px 0 -104px rgba(255, 255, 255, 0.489),
        116px 69px 0 -104px rgba(255, 255, 255, 0.202),
        -9px -4px 0 -104px rgba(255, 255, 255, 0.045),
        33px -80px 0 -104px rgba(255, 255, 255, 0.027),
        -58px -77px 0 -104px rgba(255, 255, 255, 0.07),
        125px -93px 0 -104px rgba(255, 255, 255, 0.104),
        49px -24px 0 -104px rgba(255, 255, 255, 0.439),
        115px -25px 0 -104px rgba(255, 255, 255, 0.948),
        -78px 29px 0 -104px rgba(255, 255, 255, 0.119),
        142px 14px 0 -104px rgba(255, 255, 255, 0.104),
        -33px -110px 0 -104px rgba(255, 255, 255, 0.415),
        -17px 44px 0 -104px rgba(255, 255, 255, 0.094),
        -94px 7px 0 -104px rgba(255, 255, 255, 0.965),
        66px 103px 0 -104px rgba(255, 255, 255, 0.06),
        -19px -74px 0 -104px rgba(255, 255, 255, 0.118),
        61px 115px 0 -104px rgba(255, 255, 255, 0.82),
        102px -141px 0 -104px rgba(255, 255, 255, 0.727),
        -77px -143px 0 -104px rgba(255, 255, 255, 0.861),
        120px 33px 0 -104px rgba(255, 255, 255, 0.321),
        66px 128px 0 -104px rgba(255, 255, 255, 0.277),
        -143px 94px 0 -104px rgba(255, 255, 255, 0.453),
        -100px 67px 0 -104px rgba(255, 255, 255, 0.782),
        72px 21px 0 -104px rgba(255, 255, 255, 0.948),
        -71px 120px 0 -104px rgba(255, 255, 255, 0.837),
        -83px -38px 0 -104px rgba(255, 255, 255, 0.95),
        91px -78px 0 -104px rgba(255, 255, 255, 0.702),
        -139px 88px 0 -104px rgba(255, 255, 255, 0.67),
        -14px 74px 0 -104px rgba(255, 255, 255, 0.608),
        -15px 111px 0 -104px rgba(255, 255, 255, 0.97),
        67px 121px 0 -104px rgba(255, 255, 255, 0.55),
        47px 49px 0 -104px rgba(255, 255, 255, 0.704),
        58px -48px 0 -104px rgba(255, 255, 255, 0.946),
        96px 115px 0 -104px rgba(255, 255, 255, 0.887),
        -63px 73px 0 -104px rgba(255, 255, 255, 0.603),
        34px 138px 0 -104px rgba(255, 255, 255, 0.612),
        -131px 76px 0 -104px rgba(255, 255, 255, 0.971),
        -40px -57px 0 -104px rgba(255, 255, 255, 0.022),
        -21px -140px 0 -104px rgba(255, 255, 255, 0.507),
        60px 136px 0 -104px rgba(255, 255, 255, 0.924),
        -46px -32px 0 -104px rgba(255, 255, 255, 0.44),
        34px -18px 0 -104px rgba(255, 255, 255, 0.715),
        62px 13px 0 -104px rgba(255, 255, 255, 0.804),
        24px 128px 0 -104px rgba(255, 255, 255, 0.318),
        66px -22px 0 -104px rgba(255, 255, 255, 0.167),
        9px -59px 0 -104px rgba(255, 255, 255, 0.96),
        -1px -27px 0 -104px rgba(255, 255, 255, 0.015),
        -132px -35px 0 -104px rgba(255, 255, 255, 0.857),
        141px 43px 0 -104px rgba(255, 255, 255, 0.567),
        -113px -56px 0 -104px rgba(255, 255, 255, 0.471),
        36px 2px 0 -104px rgba(255, 255, 255, 0.956),
        -33px 79px 0 -104px rgba(255, 255, 255, 0.511),
        -139px -97px 0 -104px rgba(255, 255, 255, 0.431),
        -66px 0px 0 -104px rgba(255, 255, 255, 0.335),
        -115px 127px 0 -104px rgba(255, 255, 255, 0.106),
        88px -9px 0 -104px rgba(255, 255, 255, 0.537),
        97px 53px 0 -104px rgba(255, 255, 255, 0.951),
        -16px -142px 0 -104px rgba(255, 255, 255, 0.52),
        108px -29px 0 -104px rgba(255, 255, 255, 0.535),
        90px -17px 0 -104px rgba(255, 255, 255, 0.846),
        62px -118px 0 -104px rgba(255, 255, 255, 0.923),
        18px -8px 0 -104px rgba(255, 255, 255, 0.676),
        20px -122px 0 -104px rgba(255, 255, 255, 0.563),
        28px 21px 0 -104px rgba(255, 255, 255, 0.65),
        34px -117px 0 -104px rgba(255, 255, 255, 0.932),
        -71px 10px 0 -104px rgba(255, 255, 255, 0.452),
        -110px 3px 0 -104px rgba(255, 255, 255, 0.983),
        -45px -123px 0 -104px rgba(255, 255, 255, 0.023),
        -128px -9px 0 -104px rgba(255, 255, 255, 0.819),
        110px -87px 0 -104px rgba(255, 255, 255, 0.589),
        71px -61px 0 -104px rgba(255, 255, 255, 0.372),
        19px 4px 0 -104px rgba(255, 255, 255, 0.116),
        -125px 67px 0 -104px rgba(255, 255, 255, 0.646),
        -39px 8px 0 -104px rgba(255, 255, 255, 0.867),
        -23px -41px 0 -104px rgba(255, 255, 255, 0.611),
        124px 41px 0 -104px rgba(255, 255, 255, 0.05),
        -42px 105px 0 -104px rgba(255, 255, 255, 0.618),
        51px 99px 0 -104px rgba(255, 255, 255, 0.479),
        110px 85px 0 -104px rgba(255, 255, 255, 0.941),
        26px -118px 0 -104px rgba(255, 255, 255, 0.005),
        122px 60px 0 -104px rgba(255, 255, 255, 0.824),
        118px 91px 0 -104px rgba(255, 255, 255, 0.87),
        30px 60px 0 -104px rgba(255, 255, 255, 0.786),
        20px -142px 0 -104px rgba(255, 255, 255, 0.931),
        131px -30px 0 -104px rgba(255, 255, 255, 0.429),
        59px -45px 0 -104px rgba(255, 255, 255, 0.304),
        -114px 59px 0 -104px rgba(255, 255, 255, 0.554),
        2px 2px 0 -104px rgba(255, 255, 255, 0.056),
        13px 129px 0 -104px rgba(255, 255, 255, 0.127),
        -89px -37px 0 -104px rgba(255, 255, 255, 0.724),
        -28px 117px 0 -104px rgba(255, 255, 255, 0.099),
        70px 112px 0 -104px rgba(255, 255, 255, 0.115),
        -118px 71px 0 -104px rgba(255, 255, 255, 0.604),
        -82px 86px 0 -104px rgba(255, 255, 255, 0.837),
        -81px 95px 0 -104px rgba(255, 255, 255, 0.676),
        48px -115px 0 -104px rgba(255, 255, 255, 0.818),
        -64px 93px 0 -104px rgba(255, 255, 255, 0.338),
        80px 72px 0 -104px rgba(255, 255, 255, 0.259),
        6px -12px 0 -104px rgba(255, 255, 255, 0.567),
        -40px -58px 0 -104px rgba(255, 255, 255, 0.676),
        -55px 119px 0 -104px rgba(255, 255, 255, 0.21),
        88px 39px 0 -104px rgba(255, 255, 255, 0.723),
        143px 48px 0 -104px rgba(255, 255, 255, 0.682),
        25px -43px 0 -104px rgba(255, 255, 255, 0.438),
        -37px 6px 0 -104px rgba(255, 255, 255, 0.139),
        140px -43px 0 -104px rgba(255, 255, 255, 0.748),
        -88px 2px 0 -104px rgba(255, 255, 255, 0.801),
        57px 40px 0 -104px rgba(255, 255, 255, 0.99),
        -96px -79px 0 -104px rgba(255, 255, 255, 0.477),
        17px -28px 0 -104px rgba(255, 255, 255, 0.307),
        129px 21px 0 -104px rgba(255, 255, 255, 0.644),
        108px -140px 0 -104px rgba(255, 255, 255, 0.925),
        -98px 41px 0 -104px rgba(255, 255, 255, 0.81),
        124px 110px 0 -104px rgba(255, 255, 255, 0.118),
        -3px -63px 0 -104px rgba(255, 255, 255, 0.653),
        141px 50px 0 -104px rgba(255, 255, 255, 0.812),
        -81px 105px 0 -104px rgba(255, 255, 255, 0.586),
        100px -22px 0 -104px rgba(255, 255, 255, 0.938),
        89px 14px 0 -104px rgba(255, 255, 255, 0.65),
        -123px -25px 0 -104px rgba(255, 255, 255, 0.854),
        72px -27px 0 -104px rgba(255, 255, 255, 0.588),
        -143px 16px 0 -104px rgba(255, 255, 255, 0.001),
        8px 74px 0 -104px rgba(255, 255, 255, 0.135),
        -38px -135px 0 -104px rgba(255, 255, 255, 0.512),
        -118px -51px 0 -104px rgba(255, 255, 255, 0.406),
        -26px -25px 0 -104px rgba(255, 255, 255, 0.533),
        57px -70px 0 -104px rgba(255, 255, 255, 0.748),
        -104px 6px 0 -104px rgba(255, 255, 255, 0.287),
        -56px 73px 0 -104px rgba(255, 255, 255, 0.201),
        -79px 122px 0 -104px rgba(255, 255, 255, 0.525),
        105px -92px 0 -104px rgba(255, 255, 255, 0.745),
        -49px -107px 0 -104px rgba(255, 255, 255, 0.846),
        81px 86px 0 -104px rgba(255, 255, 255, 0.362),
        116px 12px 0 -104px rgba(255, 255, 255, 0.474),
        -118px -112px 0 -104px rgba(255, 255, 255, 0.678),
        -44px -26px 0 -104px rgba(255, 255, 255, 0.731),
        -95px 65px 0 -104px rgba(255, 255, 255, 0.494),
        -36px 132px 0 -104px rgba(255, 255, 255, 0.273),
        56px -130px 0 -104px rgba(255, 255, 255, 0.667),
        -57px 4px 0 -104px rgba(255, 255, 255, 0.055),
        -64px -97px 0 -104px rgba(255, 255, 255, 0.172),
        -135px -73px 0 -104px rgba(255, 255, 255, 0.446),
        -10px 66px 0 -104px rgba(255, 255, 255, 0.965),
        -41px 117px 0 -104px rgba(255, 255, 255, 0.671),
        -81px 1px 0 -104px rgba(255, 255, 255, 0.25),
        -98px -61px 0 -104px rgba(255, 255, 255, 0.576),
        67px -48px 0 -104px rgba(255, 255, 255, 0.013),
        120px -60px 0 -104px rgba(255, 255, 255, 0.515),
        45px -85px 0 -104px rgba(255, 255, 255, 0.679),
        -84px 104px 0 -104px rgba(255, 255, 255, 0.16),
        -115px -131px 0 -104px rgba(255, 255, 255, 0.33),
        -85px -93px 0 -104px rgba(255, 255, 255, 0.982),
        85px 4px 0 -104px rgba(255, 255, 255, 0.221),
        90px 36px 0 -104px rgba(255, 255, 255, 0.665),
        -121px -114px 0 -104px rgba(255, 255, 255, 0.086),
        106px -63px 0 -104px rgba(255, 255, 255, 0.661),
        -117px 81px 0 -104px rgba(255, 255, 255, 0.055),
        53px -104px 0 -104px rgba(255, 255, 255, 0.055),
        -130px -104px 0 -104px rgba(255, 255, 255, 0.707),
        131px 65px 0 -104px rgba(255, 255, 255, 0.31),
        38px 101px 0 -104px rgba(255, 255, 255, 0.825),
        -55px -29px 0 -104px rgba(255, 255, 255, 0.478),
        -46px 129px 0 -104px rgba(255, 255, 255, 0.397),
        123px -39px 0 -104px rgba(255, 255, 255, 0.606),
        79px 101px 0 -104px rgba(255, 255, 255, 0.494),
        -116px -30px 0 -104px rgba(255, 255, 255, 0.514),
        107px 102px 0 -104px rgba(255, 255, 255, 0.97),
        43px 86px 0 -104px rgba(255, 255, 255, 0.786),
        -99px 142px 0 -104px rgba(255, 255, 255, 0.034),
        -20px -127px 0 -104px rgba(255, 255, 255, 0.203),
        144px -24px 0 -104px rgba(255, 255, 255, 0.067),
        -68px -3px 0 -104px rgba(255, 255, 255, 0.601),
        89px -137px 0 -104px rgba(255, 255, 255, 0.84),
        113px -51px 0 -104px rgba(255, 255, 255, 0.924),
        -109px 32px 0 -104px rgba(255, 255, 255, 0.424),
        112px 87px 0 -104px rgba(255, 255, 255, 0.85),
        136px 68px 0 -104px rgba(255, 255, 255, 0.324),
        -30px -85px 0 -104px rgba(255, 255, 255, 0.124),
        143px 46px 0 -104px rgba(255, 255, 255, 0.079),
        -117px 132px 0 -104px rgba(255, 255, 255, 0.374),
        4px 72px 0 -104px rgba(255, 255, 255, 0.336),
        22px 99px 0 -104px rgba(255, 255, 255, 0.368),
        -6px -73px 0 -104px rgba(255, 255, 255, 0.779),
        100px 3px 0 -104px rgba(255, 255, 255, 0.978),
        48px 30px 0 -104px rgba(255, 255, 255, 0.737),
        -100px -120px 0 -104px rgba(255, 255, 255, 0.032),
        -39px -130px 0 -104px rgba(255, 255, 255, 0.045),
        -12px 45px 0 -104px rgba(255, 255, 255, 0.758),
        -74px 110px 0 -104px rgba(255, 255, 255, 0.09),
        -16px -39px 0 -104px rgba(255, 255, 255, 0.861),
        93px 64px 0 -104px rgba(255, 255, 255, 0.234),
        52px -36px 0 -104px rgba(255, 255, 255, 0.497),
        -47px -63px 0 -104px rgba(255, 255, 255, 0.889),
        107px -77px 0 -104px rgba(255, 255, 255, 0.846),
        114px 135px 0 -104px rgba(255, 255, 255, 0.81),
        64px -138px 0 -104px rgba(255, 255, 255, 0.399),
        93px -43px 0 -104px rgba(255, 255, 255, 0.854),
        -83px 137px 0 -104px rgba(255, 255, 255, 0.275),
        17px -80px 0 -104px rgba(255, 255, 255, 0.47),
        78px 130px 0 -104px rgba(255, 255, 255, 0.2),
        130px -136px 0 -104px rgba(255, 255, 255, 0.885),
        25px -119px 0 -104px rgba(255, 255, 255, 0.92),
        -3px 133px 0 -104px rgba(255, 255, 255, 0.544),
        132px -100px 0 -104px rgba(255, 255, 255, 0.433),
        43px 96px 0 -104px rgba(255, 255, 255, 0.219),
        -2px 138px 0 -104px rgba(255, 255, 255, 0.508),
        37px 35px 0 -104px rgba(255, 255, 255, 0.195),
        2px 85px 0 -104px rgba(255, 255, 255, 0.756),
        121px -138px 0 -104px rgba(255, 255, 255, 0.112),
        3px 32px 0 -104px rgba(255, 255, 255, 0.914),
        124px 59px 0 -104px rgba(255, 255, 255, 0.928),
        -51px -137px 0 -104px rgba(255, 255, 255, 0.304),
        -41px 70px 0 -104px rgba(255, 255, 255, 0.187),
        -34px -115px 0 -104px rgba(255, 255, 255, 0.121),
        -32px -30px 0 -104px rgba(255, 255, 255, 0.457),
        108px -69px 0 -104px rgba(255, 255, 255, 0.966),
        -119px -79px 0 -104px rgba(255, 255, 255, 0.785),
        107px -76px 0 -104px rgba(255, 255, 255, 0.027),
        88px 51px 0 -104px rgba(255, 255, 255, 0.589),
        -14px 49px 0 -104px rgba(255, 255, 255, 0.315);
    }
  }
  .pluto {
    height: 780px;
    width: 780px;
    margin-top: -450px;
    margin-left: -320px;
    -webkit-animation: orb 7439.7074054575s linear infinite;
    animation: orb 7439.7074054575s linear infinite;
    &:before {
      height: 3px;
      width: 3px;
      background: #fff;
      margin-top: -1.5px;
      margin-left: -1.5px;
    }
  }

  @-webkit-keyframes orb {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @keyframes orb {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`
