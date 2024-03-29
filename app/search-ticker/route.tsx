import { NextRequest, NextResponse } from 'next/server';
import { performance } from 'perf_hooks';

const tickers = [
  {
    'Code': '20MICRONS',
    'Name': '20 Microns Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE144J01027'
  },
  {
    'Code': '21STCENMGM',
    'Name': '21st Century Management Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE253B01015'
  },
  {
    'Code': '360ONE',
    'Name': '360 ONE WAM LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE466L01038'
  },
  {
    'Code': '3IINFOLTD',
    'Name': '3i Infotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE748C01038'
  },
  {
    'Code': '3MINDIA',
    'Name': '3M India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE470A01017'
  },
  {
    'Code': '3PLAND',
    'Name': '3P Land Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE105C01023'
  },
  {
    'Code': '4THDIM',
    'Name': 'Fourth Dimension Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE382T01030'
  },
  {
    'Code': '5PAISA',
    'Name': '5paisa Capital Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE618L01018'
  },
  {
    'Code': '63MOONS',
    'Name': '63 moons technologies limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE111B01023'
  },
  {
    'Code': 'A2ZINFRA',
    'Name': 'A2Z Infra Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE619I01012'
  },
  {
    'Code': 'AAATECH',
    'Name': 'AAA Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0D0U01013'
  },
  {
    'Code': 'AAKASH',
    'Name': 'Aakash Exploration Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE087Z01024'
  },
  {
    'Code': 'AAREYDRUGS',
    'Name': 'Aarey Drugs & Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE198H01019'
  },
  {
    'Code': 'AARON',
    'Name': 'Aaron Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE721Z01010'
  },
  {
    'Code': 'AARTIDRUGS',
    'Name': 'Aarti Drugs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE767A01016'
  },
  {
    'Code': 'AARTIIND',
    'Name': 'Aarti Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE769A01020'
  },
  {
    'Code': 'AARTIPHARM',
    'Name': 'Aarti Pharmalabs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0LRU01027'
  },
  {
    'Code': 'AARTISURF',
    'Name': 'Aarti Surfactants Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE09EO01013'
  },
  {
    'Code': 'AARVEEDEN',
    'Name': 'Aarvee Denims & Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE273D01019'
  },
  {
    'Code': 'AARVI',
    'Name': 'Aarvi Encon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE754X01016'
  },
  {
    'Code': 'AAVAS',
    'Name': 'Aavas Financiers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE216P01012'
  },
  {
    'Code': 'ABAN',
    'Name': 'Aban Offshore Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE421A01028'
  },
  {
    'Code': 'ABB',
    'Name': 'ABB India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE117A01022'
  },
  {
    'Code': 'ABBOTINDIA',
    'Name': 'Abbott India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE358A01014'
  },
  {
    'Code': 'ABCAPITAL',
    'Name': 'Aditya Birla Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE674K01013'
  },
  {
    'Code': 'ABCOTS-SM',
    'Name': 'A B Cotspin India Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE08PH01015'
  },
  {
    'Code': 'ABFRL',
    'Name': 'Aditya Birla Fashion and Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE647O01011'
  },
  {
    'Code': 'ABMINTLLTD',
    'Name': 'ABM International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE251C01025'
  },
  {
    'Code': 'ABSLAMC',
    'Name': 'Aditya Birla Sun Life AMC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE404A01024'
  },
  {
    'Code': 'ABSLBANETF',
    'Name': 'Aditya Birla Sun Life Nifty Bank ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ABSLNN50ET',
    'Name': 'Aditya BSL Nifty Next 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ACC',
    'Name': 'ACC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE012A01025'
  },
  {
    'Code': 'ACCELYA',
    'Name': 'Accelya Solutions India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE793A01012'
  },
  {
    'Code': 'ACCURACY',
    'Name': 'Accuracy Shipping Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE648Z01023'
  },
  {
    'Code': 'ACE',
    'Name': 'Action Construction Equipment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE731H01025'
  },
  {
    'Code': 'ACEINTEG',
    'Name': 'Ace Integrated Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE543V01017'
  },
  {
    'Code': 'ACI',
    'Name': 'Archean Chemical Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE128X01021'
  },
  {
    'Code': 'ADANIENT',
    'Name': 'Adani Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE423A01024'
  },
  {
    'Code': 'ADANIGREEN',
    'Name': 'Adani Green Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE364U01010'
  },
  {
    'Code': 'ADANIPORTS',
    'Name': 'Adani Ports and Special Economic Zone Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE742F01042'
  },
  {
    'Code': 'ADANIPOWER',
    'Name': 'Adani Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE814H01011'
  },
  {
    'Code': 'ADANITRANS',
    'Name': 'Adani Transmission Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE931S01010'
  },
  {
    'Code': 'ADFFOODS',
    'Name': 'ADF Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE982B01019'
  },
  {
    'Code': 'ADL',
    'Name': 'Archidply Decor Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CHO01012'
  },
  {
    'Code': 'ADORWELD',
    'Name': 'Ador Welding Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE045A01017'
  },
  {
    'Code': 'ADROITINFO',
    'Name': 'Adroit Infotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE737B01033'
  },
  {
    'Code': 'ADSL',
    'Name': 'Allied Digital Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE102I01027'
  },
  {
    'Code': 'ADVANIHOTR',
    'Name': 'Advani Hotels & Resorts (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE199C01026'
  },
  {
    'Code': 'ADVENZYMES',
    'Name': 'Advanced Enzyme Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE837H01020'
  },
  {
    'Code': 'AEGISCHEM',
    'Name': 'Aegis Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE208C01025'
  },
  {
    'Code': 'AETHER',
    'Name': 'Aether Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0BWX01014'
  },
  {
    'Code': 'AFFLE',
    'Name': 'Affle (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00WC01027'
  },
  {
    'Code': 'AGARIND',
    'Name': 'Agarwal Industrial Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE204E01012'
  },
  {
    'Code': 'AGI',
    'Name': 'AGI Greenpac Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE415A01038'
  },
  {
    'Code': 'AGRITECH',
    'Name': 'Agri-Tech (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE449G01018'
  },
  {
    'Code': 'AGROPHOS',
    'Name': 'Agro Phos India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE740V01019'
  },
  {
    'Code': 'AGSTRA',
    'Name': 'AGS Transact Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583L01014'
  },
  {
    'Code': 'AHL',
    'Name': 'Abans Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00ZE01026'
  },
  {
    'Code': 'AHLADA',
    'Name': 'Ahlada Engineers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00PV01013'
  },
  {
    'Code': 'AHLEAST',
    'Name': 'Asian Hotels (East) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE926K01017'
  },
  {
    'Code': 'AHLUCONT',
    'Name': 'Ahluwalia Contracts (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE758C01029'
  },
  {
    'Code': 'AHLWEST',
    'Name': 'Asian Hotels (West) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE915K01010'
  },
  {
    'Code': 'AIAENG',
    'Name': 'AIA Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE212H01026'
  },
  {
    'Code': 'AIFL',
    'Name': 'Ashapura Intimates Fashion Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE428O01016'
  },
  {
    'Code': 'AIRAN',
    'Name': 'Airan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE645W01026'
  },
  {
    'Code': 'AIROLAM',
    'Name': 'Airo Lam limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE801L01010'
  },
  {
    'Code': 'AJANTPHARM',
    'Name': 'Ajanta Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE031B01049'
  },
  {
    'Code': 'AJMERA',
    'Name': 'Ajmera Realty & Infra India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE298G01027'
  },
  {
    'Code': 'AJOONI',
    'Name': 'Ajooni Biotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE820Y01021'
  },
  {
    'Code': 'AJRINFRA',
    'Name': 'AJR INFRA AND TOLLING LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE181G01025'
  },
  {
    'Code': 'AKASH',
    'Name': 'Akash Infra-Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE737W01013'
  },
  {
    'Code': 'AKG',
    'Name': 'Akg Exim Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00Y801016'
  },
  {
    'Code': 'AKSHAR',
    'Name': 'Akshar Spintex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE256Z01017'
  },
  {
    'Code': 'AKSHARCHEM',
    'Name': 'AksharChem India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE542B01011'
  },
  {
    'Code': 'AKSHOPTFBR',
    'Name': 'Aksh Optifibre Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE523B01011'
  },
  {
    'Code': 'AKZOINDIA',
    'Name': 'Akzo Nobel India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE133A01011'
  },
  {
    'Code': 'ALANKIT',
    'Name': 'Alankit Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE914E01040'
  },
  {
    'Code': 'ALBERTDAVD',
    'Name': 'Albert David Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE155C01010'
  },
  {
    'Code': 'ALCHEM',
    'Name': 'Alchemist Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'ALEMBICLTD',
    'Name': 'Alembic Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE426A01027'
  },
  {
    'Code': 'ALICON',
    'Name': 'Alicon Castalloy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE062D01024'
  },
  {
    'Code': 'ALKALI',
    'Name': 'Alkali Metals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE773I01017'
  },
  {
    'Code': 'ALKEM',
    'Name': 'Alkem Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE540L01014'
  },
  {
    'Code': 'ALKYLAMINE',
    'Name': 'Alkyl Amines Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE150B01039'
  },
  {
    'Code': 'ALLCARGO',
    'Name': 'Allcargo Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE418H01029'
  },
  {
    'Code': 'ALLSEC',
    'Name': 'Allsec Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE835G01018'
  },
  {
    'Code': 'ALMONDZ',
    'Name': 'Almondz Global Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE326B01027'
  },
  {
    'Code': 'ALOKINDS',
    'Name': 'Alok Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE270A01029'
  },
  {
    'Code': 'ALPA',
    'Name': 'Alpa Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE385I01010'
  },
  {
    'Code': 'ALPHAGEO',
    'Name': 'Alphageo (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE137C01018'
  },
  {
    'Code': 'ALPSINDUS',
    'Name': 'Alps Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE093B01015'
  },
  {
    'Code': 'AMARAJABAT',
    'Name': 'Amara Raja Batteries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE885A01032'
  },
  {
    'Code': 'AMBER',
    'Name': 'Amber Enterprises India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE371P01015'
  },
  {
    'Code': 'AMBIKCO',
    'Name': 'Ambika Cotton Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE540G01014'
  },
  {
    'Code': 'AMBUJACEM',
    'Name': 'Ambuja Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE079A01024'
  },
  {
    'Code': 'AMDIND',
    'Name': 'AMD Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE005I01014'
  },
  {
    'Code': 'AMIORG',
    'Name': 'Ami Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00FF01017'
  },
  {
    'Code': 'AMJLAND',
    'Name': 'Amj Land Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE606A01024'
  },
  {
    'Code': 'AMRUTANJAN',
    'Name': 'Amrutanjan Health Care Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE098F01031'
  },
  {
    'Code': 'ANANDRATHI',
    'Name': 'Anand Rathi Wealth Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE463V01026'
  },
  {
    'Code': 'ANANTRAJ',
    'Name': 'Anant Raj Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE242C01024'
  },
  {
    'Code': 'ANDHRACEMT',
    'Name': 'Andhra Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE666E01012'
  },
  {
    'Code': 'ANDHRAPAP',
    'Name': 'ANDHRA PAPER LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE435A01028'
  },
  {
    'Code': 'ANDHRSUGAR',
    'Name': 'The Andhra Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE715B01021'
  },
  {
    'Code': 'ANDREWYU',
    'Name': 'Andrew Yule & Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE449C01025'
  },
  {
    'Code': 'ANGELONE',
    'Name': 'Angel One Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE732I01013'
  },
  {
    'Code': 'ANIKINDS',
    'Name': 'Anik Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE087B01017'
  },
  {
    'Code': 'ANKITMETAL',
    'Name': 'Ankit Metal & Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE106I01010'
  },
  {
    'Code': 'ANMOL',
    'Name': 'Anmol India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02AR01019'
  },
  {
    'Code': 'ANSALAPI',
    'Name': 'Ansal Properties & Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE436A01026'
  },
  {
    'Code': 'ANTGRAPHIC',
    'Name': 'Antarctica Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE414B01021'
  },
  {
    'Code': 'ANUP',
    'Name': 'The Anup Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE294Z01018'
  },
  {
    'Code': 'ANURAS',
    'Name': 'Anupam Rasayan India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE930P01018'
  },
  {
    'Code': 'APARINDS',
    'Name': 'Apar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE372A01015'
  },
  {
    'Code': 'APCL',
    'Name': 'Anjani Portland Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE071F01012'
  },
  {
    'Code': 'APCOTEXIND',
    'Name': 'Apcotex Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE116A01032'
  },
  {
    'Code': 'APEX',
    'Name': 'Apex Frozen Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE346W01013'
  },
  {
    'Code': 'APLAPOLLO',
    'Name': 'APL Apollo Tubes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE702C01027'
  },
  {
    'Code': 'APLLTD',
    'Name': 'Alembic Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE901L01018'
  },
  {
    'Code': 'APOLLO',
    'Name': 'Apollo Micro Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE713T01010'
  },
  {
    'Code': 'APOLLOHOSP',
    'Name': 'Apollo Hospitals Enterprise Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE437A01024'
  },
  {
    'Code': 'APOLLOPIPE',
    'Name': 'Apollo Pipes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE126J01016'
  },
  {
    'Code': 'APOLLOTYRE',
    'Name': 'Apollo Tyres Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE438A01022'
  },
  {
    'Code': 'APOLSINHOT',
    'Name': 'Apollo Sindoori Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE451F01024'
  },
  {
    'Code': 'APTECHT',
    'Name': 'Aptech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE266F01018'
  },
  {
    'Code': 'APTUS',
    'Name': 'Aptus Value Housing Finance India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE852O01025'
  },
  {
    'Code': 'ARCHIDPLY',
    'Name': 'Archidply Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE877I01016'
  },
  {
    'Code': 'ARCHIES',
    'Name': 'Archies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE731A01020'
  },
  {
    'Code': 'ARCOTECH',
    'Name': 'Arcotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE574I01035'
  },
  {
    'Code': 'ARENTERP',
    'Name': 'Rajdarshan Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE610C01014'
  },
  {
    'Code': 'ARIES',
    'Name': 'Aries Agro Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE298I01015'
  },
  {
    'Code': 'ARIHANTCAP',
    'Name': 'Arihant Capital Markets Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE420B01036'
  },
  {
    'Code': 'ARIHANTSUP',
    'Name': 'Arihant Superstructures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE643K01018'
  },
  {
    'Code': 'ARMANFIN',
    'Name': 'Arman Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE109C01017'
  },
  {
    'Code': 'AROGRANITE',
    'Name': 'Aro Granite Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE210C01013'
  },
  {
    'Code': 'ARROWGREEN',
    'Name': 'Arrow Greentech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE570D01018'
  },
  {
    'Code': 'ARSHIYA',
    'Name': 'Arshiya Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE968D01022'
  },
  {
    'Code': 'ARSSINFRA',
    'Name': 'ARSS Infrastructure Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE267I01010'
  },
  {
    'Code': 'ARTEMISMED',
    'Name': 'Artemis Medicare Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE025R01021'
  },
  {
    'Code': 'ARTNIRMAN',
    'Name': 'Art Nirman Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE738V01013'
  },
  {
    'Code': 'ARVEE',
    'Name': 'Arvee Laboratories (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE006Z01016'
  },
  {
    'Code': 'ARVIND',
    'Name': 'Arvind Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE034A01011'
  },
  {
    'Code': 'ARVINDFASN',
    'Name': 'Arvind Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE955V01021'
  },
  {
    'Code': 'ARVSMART',
    'Name': 'Arvind SmartSpaces Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE034S01021'
  },
  {
    'Code': 'ASAHIINDIA',
    'Name': 'Asahi India Glass Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE439A01020'
  },
  {
    'Code': 'ASAHISONG',
    'Name': 'Asahi Songwon Colors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE228I01012'
  },
  {
    'Code': 'ASAL',
    'Name': 'Automotive Stampings and Assemblies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE900C01027'
  },
  {
    'Code': 'ASALCBR',
    'Name': 'Associated Alcohols & Breweries Ltd.',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE073G01016'
  },
  {
    'Code': 'ASHAPURMIN',
    'Name': 'Ashapura Minechem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE348A01023'
  },
  {
    'Code': 'ASHIANA',
    'Name': 'Ashiana Housing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE365D01021'
  },
  {
    'Code': 'ASHIMASYN',
    'Name': 'Ashima Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE440A01010'
  },
  {
    'Code': 'ASHOKA',
    'Name': 'Ashoka Buildcon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE442H01029'
  },
  {
    'Code': 'ASHOKLEY',
    'Name': 'Ashok Leyland Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE208A01029'
  },
  {
    'Code': 'ASIANENE',
    'Name': 'Asian Energy Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE276G01015'
  },
  {
    'Code': 'ASIANHOTNR',
    'Name': 'Asian Hotels (North) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE363A01022'
  },
  {
    'Code': 'ASIANPAINT',
    'Name': 'Asian Paints Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE021A01026'
  },
  {
    'Code': 'ASIANTILES',
    'Name': 'Asian Granito India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE022I01019'
  },
  {
    'Code': 'ASMS',
    'Name': 'Bartronics India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE855F01042'
  },
  {
    'Code': 'ASPINWALL',
    'Name': 'Aspinwall and Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE991I01015'
  },
  {
    'Code': 'ASTEC',
    'Name': 'Astec LifeSciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE563J01010'
  },
  {
    'Code': 'ASTERDM',
    'Name': 'Aster DM Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE914M01019'
  },
  {
    'Code': 'ASTRAL',
    'Name': 'Astral Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE006I01046'
  },
  {
    'Code': 'ASTRAMICRO',
    'Name': 'Astra Microwave Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE386C01029'
  },
  {
    'Code': 'ASTRAZEN',
    'Name': 'AstraZeneca Pharma India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE203A01020'
  },
  {
    'Code': 'ASTRON',
    'Name': 'Astron Paper & Board Mill Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE646X01014'
  },
  {
    'Code': 'ATFL',
    'Name': 'Agro Tech Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE209A01019'
  },
  {
    'Code': 'ATGL',
    'Name': 'Adani Total Gas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE399L01023'
  },
  {
    'Code': 'ATLANTA',
    'Name': 'Atlanta  Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE285H01022'
  },
  {
    'Code': 'ATLASCYCLE',
    'Name': 'Atlas Cycles (Haryana) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE446A01025'
  },
  {
    'Code': 'ATNINTER',
    'Name': 'ATN International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE803A01027'
  },
  {
    'Code': 'ATUL',
    'Name': 'Atul Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE100A01010'
  },
  {
    'Code': 'ATULAUTO',
    'Name': 'Atul Auto Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE951D01028'
  },
  {
    'Code': 'AUBANK',
    'Name': 'AU Small Finance Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE949L01017'
  },
  {
    'Code': 'AURIONPRO',
    'Name': 'Aurionpro Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE132H01018'
  },
  {
    'Code': 'AUROPHARMA',
    'Name': 'Aurobindo Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE406A01037'
  },
  {
    'Code': 'AURUM',
    'Name': 'Aurum PropTech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE898S01029'
  },
  {
    'Code': 'AUSOMENT',
    'Name': 'Ausom Enterprise Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE218C01016'
  },
  {
    'Code': 'AUTOAXLES',
    'Name': 'Automotive Axles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE449A01011'
  },
  {
    'Code': 'AUTOBEES',
    'Name': 'AUTOBEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AUTOIND',
    'Name': 'Autoline Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE718H01014'
  },
  {
    'Code': 'AUTOLITIND',
    'Name': 'Autolite (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE448A01013'
  },
  {
    'Code': 'AVADHSUGAR',
    'Name': 'Avadh Sugar & Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE349W01017'
  },
  {
    'Code': 'AVANTIFEED',
    'Name': 'Avanti Feeds Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE871C01038'
  },
  {
    'Code': 'AVONMORE',
    'Name': 'Avonmore Capital & Management Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE323B01016'
  },
  {
    'Code': 'AVROIND',
    'Name': 'AVRO INDIA LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE652Z01017'
  },
  {
    'Code': 'AVTNPL',
    'Name': 'AVT Natural Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE488D01021'
  },
  {
    'Code': 'AWHCL',
    'Name': 'Antony Waste Handling Cell Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01BK01022'
  },
  {
    'Code': 'AWL',
    'Name': 'Adani Wilmar Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE699H01024'
  },
  {
    'Code': 'AXISBANK',
    'Name': 'Axis Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE238A01034'
  },
  {
    'Code': 'AXISBNKETF',
    'Name': 'Axis NIFTY Bank ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AXISBPSETF',
    'Name': 'Axis Nifty AAA Bond Plus SDL Apr 2026 50:50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AXISCADES',
    'Name': 'AXISCADES Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE555B01013'
  },
  {
    'Code': 'AXISCETF',
    'Name': 'Axis NIFTY India Consumption ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AXISGOLD',
    'Name': 'Axis Gold ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF846K01347'
  },
  {
    'Code': 'AXISHCETF',
    'Name': 'Axis NIFTY Healthcare ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AXISNIFTY',
    'Name': 'Axis Mutual Fund - Axis Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF846K01ZL0'
  },
  {
    'Code': 'AXISTECETF',
    'Name': 'Axis NIFTY IT ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'AXITA',
    'Name': 'Axita Cotton Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02EZ01022'
  },
  {
    'Code': 'AYMSYNTEX',
    'Name': 'AYM Syntex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE193B01039'
  },
  {
    'Code': 'BAFNAPH',
    'Name': 'Bafna Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878I01022'
  },
  {
    'Code': 'BAGFILMS',
    'Name': 'B.A.G Films and Media Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE116D01028'
  },
  {
    'Code': 'BAIDFIN',
    'Name': 'Baid Finserv Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE020D01022'
  },
  {
    'Code': 'BAJAJ',
    'Name': 'BAJAJ AUTO LTD',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'BAJAJ-AUTO',
    'Name': 'Bajaj Auto Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE917I01010'
  },
  {
    'Code': 'BAJAJCON',
    'Name': 'Bajaj Consumer Care Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE933K01021'
  },
  {
    'Code': 'BAJAJELEC',
    'Name': 'Bajaj Electricals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE193E01025'
  },
  {
    'Code': 'BAJAJFINSV',
    'Name': 'Bajaj Finserv Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE918I01026'
  },
  {
    'Code': 'BAJAJHCARE',
    'Name': 'Bajaj Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE411U01027'
  },
  {
    'Code': 'BAJAJHIND',
    'Name': 'Bajaj Hindusthan Sugar Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE306A01021'
  },
  {
    'Code': 'BAJAJHLDNG',
    'Name': 'Bajaj Holdings & Investment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE118A01012'
  },
  {
    'Code': 'BAJFINANCE',
    'Name': 'Bajaj Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE296A01024'
  },
  {
    'Code': 'BALAJITELE',
    'Name': 'Balaji Telefilms Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE794B01026'
  },
  {
    'Code': 'BALAMINES',
    'Name': 'Balaji Amines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050E01027'
  },
  {
    'Code': 'BALAXI',
    'Name': 'BALAXI PHARMACEUTICALS LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE618N01014'
  },
  {
    'Code': 'BALKRISHNA',
    'Name': 'Balkrishna Paper Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE875R01011'
  },
  {
    'Code': 'BALKRISIND',
    'Name': 'Balkrishna Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE787D01026'
  },
  {
    'Code': 'BALMLAWRIE',
    'Name': 'Balmer Lawrie & Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE164A01016'
  },
  {
    'Code': 'BALPHARMA',
    'Name': 'Bal Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE083D01012'
  },
  {
    'Code': 'BALRAMCHIN',
    'Name': 'Balrampur Chini Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE119A01028'
  },
  {
    'Code': 'BANARBEADS',
    'Name': 'Banaras Beads Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE655B01011'
  },
  {
    'Code': 'BANARISUG',
    'Name': 'Bannari Amman Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE459A01010'
  },
  {
    'Code': 'BANCOINDIA',
    'Name': 'Banco Products (I) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE213C01025'
  },
  {
    'Code': 'BANDHANBNK',
    'Name': 'Bandhan Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE545U01014'
  },
  {
    'Code': 'BANG',
    'Name': 'Bang Overseas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE863I01016'
  },
  {
    'Code': 'BANKA',
    'Name': 'Banka BioLoo Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE862Y01015'
  },
  {
    'Code': 'BANKBARODA',
    'Name': 'Bank of Baroda',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE028A01039'
  },
  {
    'Code': 'BANKBEES',
    'Name': 'Nippon Mutual Funds - Nippon ETF Bank BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01078'
  },
  {
    'Code': 'BANKINDIA',
    'Name': 'Bank of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE084A01016'
  },
  {
    'Code': 'BANSWRAS',
    'Name': 'Banswara Syntex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE629D01020'
  },
  {
    'Code': 'BARBEQUE',
    'Name': 'Barbeque Nation Hospitality Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE382M01027'
  },
  {
    'Code': 'BASF',
    'Name': 'BASF India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE373A01013'
  },
  {
    'Code': 'BASML',
    'Name': 'Bannari Amman Spinning Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE186H01022'
  },
  {
    'Code': 'BATAINDIA',
    'Name': 'Bata India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE176A01028'
  },
  {
    'Code': 'BAYERCROP',
    'Name': 'Bayer Cropscience Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE462A01022'
  },
  {
    'Code': 'BBETF0432',
    'Name': 'BHARAT Bond ETF - April 2032',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'BBL',
    'Name': 'Bharat Bijlee Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE464A01028'
  },
  {
    'Code': 'BBOX',
    'Name': 'Black Box Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE676A01027'
  },
  {
    'Code': 'BBTC',
    'Name': 'Bombay Burmah Trading Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050A01025'
  },
  {
    'Code': 'BBTCL',
    'Name': 'B&B Triplewall Containers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01EE01011'
  },
  {
    'Code': 'BCG',
    'Name': 'Brightcom Group Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE425B01027'
  },
  {
    'Code': 'BCLIND',
    'Name': 'Bcl Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE412G01016'
  },
  {
    'Code': 'BCONCEPTS',
    'Name': 'Brand Concepts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE977Y01011'
  },
  {
    'Code': 'BDL',
    'Name': 'Bharat Dynamics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE171Z01018'
  },
  {
    'Code': 'BEARDSELL',
    'Name': 'Beardsell Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE520H01022'
  },
  {
    'Code': 'BECTORFOOD',
    'Name': 'Mrs. Bectors Food Specialities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE495P01012'
  },
  {
    'Code': 'BEDMUTHA',
    'Name': 'Bedmutha Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE844K01012'
  },
  {
    'Code': 'BEL',
    'Name': 'Bharat Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE263A01024'
  },
  {
    'Code': 'BEML',
    'Name': 'BEML Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE258A01016'
  },
  {
    'Code': 'BEPL',
    'Name': 'Bhansali Engineering Polymers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE922A01025'
  },
  {
    'Code': 'BERGEPAINT',
    'Name': 'Berger Paints (I) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE463A01038'
  },
  {
    'Code': 'BESTAGRO',
    'Name': 'Best Agrolife Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE052T01013'
  },
  {
    'Code': 'BFINVEST',
    'Name': 'BF Investment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878K01010'
  },
  {
    'Code': 'BFUTILITIE',
    'Name': 'BF Utilities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE243D01012'
  },
  {
    'Code': 'BGLOBAL',
    'Name': 'Bharatiya Global Infomedia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE224M01013'
  },
  {
    'Code': 'BGRENERGY',
    'Name': 'BGR Energy Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE661I01014'
  },
  {
    'Code': 'BHAGCHEM',
    'Name': 'Bhagiradha Chemicals & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE414D01019'
  },
  {
    'Code': 'BHAGERIA',
    'Name': 'Bhageria Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE354C01027'
  },
  {
    'Code': 'BHAGYANGR',
    'Name': 'Bhagyanagar India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE458B01036'
  },
  {
    'Code': 'BHANDARI',
    'Name': 'Bhandari Hosiery Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE474E01029'
  },
  {
    'Code': 'BHARATFORG',
    'Name': 'Bharat Forge Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE465A01025'
  },
  {
    'Code': 'BHARATGEAR',
    'Name': 'Bharat Gears Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE561C01019'
  },
  {
    'Code': 'BHARATRAS',
    'Name': 'Bharat Rasayan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE838B01013'
  },
  {
    'Code': 'BHARATWIRE',
    'Name': 'Bharat Wire Ropes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE316L01019'
  },
  {
    'Code': 'BHARTIARTL',
    'Name': 'Bharti Airtel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE397D01024'
  },
  {
    'Code': 'BHEL',
    'Name': 'Bharat Heavy Electricals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE257A01026'
  },
  {
    'Code': 'BIGBLOC',
    'Name': 'Bigbloc Construction Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE412U01025'
  },
  {
    'Code': 'BIKAJI',
    'Name': 'Bikaji Foods International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00E101023'
  },
  {
    'Code': 'BIL',
    'Name': 'Bhartiya International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE828A01016'
  },
  {
    'Code': 'BILENERGY',
    'Name': 'Bil Energy Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE607L01029'
  },
  {
    'Code': 'BINANIIND',
    'Name': 'Binani Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE071A01013'
  },
  {
    'Code': 'BINDALAGRO',
    'Name': 'Oswal Chemicals & Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE143A01010'
  },
  {
    'Code': 'BIOCON',
    'Name': 'Biocon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE376G01013'
  },
  {
    'Code': 'BIOFILCHEM',
    'Name': 'Biofil Chemicals & Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE829A01014'
  },
  {
    'Code': 'BIRET',
    'Name': 'Brookfield India Real Estate Trust',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'BIRET-RR',
    'Name': 'Brookfield India Real Estate Trust',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0FDU25010'
  },
  {
    'Code': 'BIRLACABLE',
    'Name': 'Birla Cable Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE800A01015'
  },
  {
    'Code': 'BIRLACORPN',
    'Name': 'Birla Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE340A01012'
  },
  {
    'Code': 'BIRLAMONEY',
    'Name': 'Aditya Birla Money Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE865C01022'
  },
  {
    'Code': 'BIRLATYRE',
    'Name': 'Birla Tyres Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0AEJ01013'
  },
  {
    'Code': 'BKMINDST',
    'Name': 'Bkm Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE831Q01016'
  },
  {
    'Code': 'BLAL',
    'Name': 'BEML LAND ASSETS LTD',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'BLBLIMITED',
    'Name': 'BLB Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE791A01024'
  },
  {
    'Code': 'BLISSGVS',
    'Name': 'Bliss GVS Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE416D01022'
  },
  {
    'Code': 'BLKASHYAP',
    'Name': 'B. L. Kashyap and Sons Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE350H01032'
  },
  {
    'Code': 'BLS',
    'Name': 'BLS International Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE153T01027'
  },
  {
    'Code': 'BLUEBLENDS',
    'Name': 'Blue Blends (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE113O01014'
  },
  {
    'Code': 'BLUECHIP',
    'Name': 'Blue Chip India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE657B01025'
  },
  {
    'Code': 'BLUECOAST',
    'Name': 'Blue Coast Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE472B01011'
  },
  {
    'Code': 'BLUEDART',
    'Name': 'Blue Dart Express Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE233B01017'
  },
  {
    'Code': 'BLUESTARCO',
    'Name': 'Blue Star Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE472A01039'
  },
  {
    'Code': 'BODALCHEM',
    'Name': 'Bodal Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE338D01028'
  },
  {
    'Code': 'BOHRAIND',
    'Name': 'Bohra Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE802W01023'
  },
  {
    'Code': 'BOMDYEING',
    'Name': 'Bombay Dyeing & Mfg Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE032A01023'
  },
  {
    'Code': 'BOROLTD',
    'Name': 'Borosil Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02PY01013'
  },
  {
    'Code': 'BORORENEW',
    'Name': 'BOROSIL RENEWABLES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE666D01022'
  },
  {
    'Code': 'BOSCHLTD',
    'Name': 'Bosch Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE323A01026'
  },
  {
    'Code': 'BPCL',
    'Name': 'Bharat Petroleum Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE029A01011'
  },
  {
    'Code': 'BPL',
    'Name': 'BPL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE110A01019'
  },
  {
    'Code': 'BRFL',
    'Name': 'Bombay Rayon Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE589G01011'
  },
  {
    'Code': 'BRIGADE',
    'Name': 'Brigade Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE791I01019'
  },
  {
    'Code': 'BRITANNIA',
    'Name': 'Britannia Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE216A01030'
  },
  {
    'Code': 'BRNL',
    'Name': 'Bharat Road Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE727S01012'
  },
  {
    'Code': 'BROOKS',
    'Name': 'Brooks Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE650L01011'
  },
  {
    'Code': 'BSE',
    'Name': 'BSE Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE118H01025'
  },
  {
    'Code': 'BSHSL',
    'Name': 'Bombay Super Hybrid Seeds Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE032Z01020'
  },
  {
    'Code': 'BSL',
    'Name': 'BSL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE594B01012'
  },
  {
    'Code': 'BSLGOLDETF',
    'Name': 'Birla Sun Life Mutual Fund - Aditya Birla Sun Life Gold ETF - Growth',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF209K01HT2'
  },
  {
    'Code': 'BSLNIFTY',
    'Name': 'Birla Sun Life Mutual Fund - Birla Sun Life Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF209K01IR4'
  },
  {
    'Code': 'BSLSENETFG',
    'Name': 'BSLSENETFG',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'BSOFT',
    'Name': 'BIRLASOFT LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE836A01035'
  },
  {
    'Code': 'BTML',
    'Name': 'Bodhi Tree Multimedia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0EEJ01015'
  },
  {
    'Code': 'BURNPUR',
    'Name': 'Burnpur Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE817H01014'
  },
  {
    'Code': 'BUTTERFLY',
    'Name': 'Butterfly Gandhimathi Appliances Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE295F01017'
  },
  {
    'Code': 'BVCL',
    'Name': 'Barak Valley Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE139I01011'
  },
  {
    'Code': 'BYKE',
    'Name': 'The Byke Hospitality Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE319B01014'
  },
  {
    'Code': 'CALSOFT',
    'Name': 'California Software Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE526B01014'
  },
  {
    'Code': 'CAMLINFINE',
    'Name': 'Camlin Fine Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE052I01032'
  },
  {
    'Code': 'CAMPUS',
    'Name': 'Campus Activewear Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278Y01022'
  },
  {
    'Code': 'CAMS',
    'Name': 'Computer Age Management Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE596I01012'
  },
  {
    'Code': 'CANBK',
    'Name': 'Canara Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE476A01014'
  },
  {
    'Code': 'CANDC',
    'Name': 'C & C Constructions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE874H01015'
  },
  {
    'Code': 'CANFINHOME',
    'Name': 'Can Fin Homes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE477A01020'
  },
  {
    'Code': 'CANTABIL',
    'Name': 'Cantabil Retail India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE068L01016'
  },
  {
    'Code': 'CAPACITE',
    'Name': 'Capacit\'e Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE264T01014'
  },
  {
    'Code': 'CAPLIPOINT',
    'Name': 'Caplin Point Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE475E01026'
  },
  {
    'Code': 'CAPTRUST',
    'Name': 'Capital Trust Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE707C01018'
  },
  {
    'Code': 'CARBORUNIV',
    'Name': 'Carborundum Universal Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE120A01034'
  },
  {
    'Code': 'CAREERP',
    'Name': 'Career Point Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE521J01018'
  },
  {
    'Code': 'CARERATING',
    'Name': 'CARE Ratings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE752H01013'
  },
  {
    'Code': 'CARTRADE',
    'Name': 'Cartrade Tech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE290S01011'
  },
  {
    'Code': 'CARYSIL',
    'Name': 'CARYSIL LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE482D01024'
  },
  {
    'Code': 'CASTROLIND',
    'Name': 'Castrol India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE172A01027'
  },
  {
    'Code': 'CCCL',
    'Name': 'Consolidated Construction Consortium Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE429I01024'
  },
  {
    'Code': 'CCHHL',
    'Name': 'Country Club Hospitality & Holidays Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE652F01027'
  },
  {
    'Code': 'CCL',
    'Name': 'CCL Products (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE421D01022'
  },
  {
    'Code': 'CDSL',
    'Name': 'Central Depository Services (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE736A01011'
  },
  {
    'Code': 'CEATLTD',
    'Name': 'CEAT Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE482A01020'
  },
  {
    'Code': 'CELEBRITY',
    'Name': 'Celebrity Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE185H01016'
  },
  {
    'Code': 'CELESTIAL',
    'Name': 'Celestial Biolabs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE221I01017'
  },
  {
    'Code': 'CENTENKA',
    'Name': 'Century Enka Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE485A01015'
  },
  {
    'Code': 'CENTEXT',
    'Name': 'Century Extrusions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE281A01026'
  },
  {
    'Code': 'CENTRALBK',
    'Name': 'Central Bank of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE483A01010'
  },
  {
    'Code': 'CENTRUM',
    'Name': 'Centrum Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE660C01027'
  },
  {
    'Code': 'CENTUM',
    'Name': 'Centum Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE320B01020'
  },
  {
    'Code': 'CENTURYPLY',
    'Name': 'Century Plyboards (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE348B01021'
  },
  {
    'Code': 'CENTURYTEX',
    'Name': 'Century Textiles & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE055A01016'
  },
  {
    'Code': 'CERA',
    'Name': 'Cera Sanitaryware Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE739E01017'
  },
  {
    'Code': 'CEREBRAINT',
    'Name': 'Cerebra Integrated Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE345B01019'
  },
  {
    'Code': 'CESC',
    'Name': 'CESC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE486A01021'
  },
  {
    'Code': 'CGCL',
    'Name': 'Capri Global Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE180C01026'
  },
  {
    'Code': 'CGPOWER',
    'Name': 'CG Power and Industrial Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE067A01029'
  },
  {
    'Code': 'CHALET',
    'Name': 'Chalet Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE427F01016'
  },
  {
    'Code': 'CHAMBLFERT',
    'Name': 'Chambal Fertilizers & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE085A01013'
  },
  {
    'Code': 'CHEMBOND',
    'Name': 'Chembond Chemicals Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE995D01025'
  },
  {
    'Code': 'CHEMCON',
    'Name': 'Chemcon Speciality Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03YM01018'
  },
  {
    'Code': 'CHEMFAB',
    'Name': 'Chemfab Alkalis Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE783X01023'
  },
  {
    'Code': 'CHEMPLASTS',
    'Name': 'Chemplast Sanmar Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE488A01050'
  },
  {
    'Code': 'CHENNPETRO',
    'Name': 'Chennai Petroleum Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE178A01016'
  },
  {
    'Code': 'CHEVIOT',
    'Name': 'Cheviot Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE974B01016'
  },
  {
    'Code': 'CHOICEIN',
    'Name': 'Choice International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE102B01014'
  },
  {
    'Code': 'CHOLAFIN',
    'Name': 'Cholamandalam Investment and Finance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE121A01024'
  },
  {
    'Code': 'CHOLAHLDNG',
    'Name': 'Cholamandalam Financial Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE149A01033'
  },
  {
    'Code': 'CIGNITITEC',
    'Name': 'Cigniti Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE675C01017'
  },
  {
    'Code': 'CINELINE',
    'Name': 'Cineline India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE704H01022'
  },
  {
    'Code': 'CINEVISTA',
    'Name': 'Cinevista Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE039B01026'
  },
  {
    'Code': 'CIPLA',
    'Name': 'Cipla Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE059A01026'
  },
  {
    'Code': 'CKFSL',
    'Name': 'Cox and Kings Financial Service Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'CLEAN',
    'Name': 'Clean Science and Technology Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE227W01023'
  },
  {
    'Code': 'CLEDUCATE',
    'Name': 'CL Educate Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE201M01029'
  },
  {
    'Code': 'CLSEL',
    'Name': 'Chaman Lal Setia Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE419D01026'
  },
  {
    'Code': 'CMICABLES',
    'Name': 'CMI Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE981B01011'
  },
  {
    'Code': 'CMSINFO',
    'Name': 'CMS Info Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE925R01014'
  },
  {
    'Code': 'COALINDIA',
    'Name': 'Coal India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE522F01014'
  },
  {
    'Code': 'COASTCORP',
    'Name': 'Coastal Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE377E01016'
  },
  {
    'Code': 'COCHINSHIP',
    'Name': 'Cochin Shipyard Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE704P01017'
  },
  {
    'Code': 'COFFEEDAY',
    'Name': 'Coffee Day Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE335K01011'
  },
  {
    'Code': 'COFORGE',
    'Name': 'Coforge Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE591G01017'
  },
  {
    'Code': 'COLPAL',
    'Name': 'Colgate Palmolive (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE259A01022'
  },
  {
    'Code': 'COMPINFO',
    'Name': 'Compuage Infocom Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE070C01037'
  },
  {
    'Code': 'COMPUSOFT',
    'Name': 'Compucom Software Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE453B01029'
  },
  {
    'Code': 'CONCOR',
    'Name': 'Container Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE111A01025'
  },
  {
    'Code': 'CONFIPET',
    'Name': 'Confidence Petroleum India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE552D01024'
  },
  {
    'Code': 'CONSOFINVT',
    'Name': 'Consolidated Finvest & Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE025A01027'
  },
  {
    'Code': 'CONSUMBEES',
    'Name': 'CONSUMBEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'CONTROLPR',
    'Name': 'Control Print Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE663B01015'
  },
  {
    'Code': 'CORALFINAC',
    'Name': 'Coral India Finance & Housing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE558D01021'
  },
  {
    'Code': 'CORDSCABLE',
    'Name': 'Cords Cable Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE792I01017'
  },
  {
    'Code': 'COROMANDEL',
    'Name': 'Coromandel International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE169A01031'
  },
  {
    'Code': 'COSMOFIRST',
    'Name': 'COSMO FIRST LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE757A01017'
  },
  {
    'Code': 'COUNCODOS',
    'Name': 'Country Condo\'s Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE695B01025'
  },
  {
    'Code': 'CPSEETF',
    'Name': 'Nippon Mutual Funds - CPSE ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF457M01133'
  },
  {
    'Code': 'CRAFTSMAN',
    'Name': 'Craftsman Automation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00LO01017'
  },
  {
    'Code': 'CREATIVE',
    'Name': 'Creative Newtech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE985W01018'
  },
  {
    'Code': 'CREATIVEYE',
    'Name': 'Creative Eye Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE230B01021'
  },
  {
    'Code': 'CREDITACC',
    'Name': 'CREDITACCESS GRAMEEN LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE741K01010'
  },
  {
    'Code': 'CREST',
    'Name': 'Crest Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE559D01011'
  },
  {
    'Code': 'CRISIL',
    'Name': 'CRISIL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE007A01025'
  },
  {
    'Code': 'CROMPTON',
    'Name': 'Crompton Greaves Consumer Electricals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE299U01018'
  },
  {
    'Code': 'CROWN',
    'Name': 'Crown Lifters Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE491V01019'
  },
  {
    'Code': 'CSBBANK',
    'Name': 'CSB Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE679A01013'
  },
  {
    'Code': 'CSLFINANCE',
    'Name': 'CSL Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE718F01018'
  },
  {
    'Code': 'CTE',
    'Name': 'Cambridge Technology Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE627H01017'
  },
  {
    'Code': 'CUB',
    'Name': 'City Union Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE491A01021'
  },
  {
    'Code': 'CUBEXTUB',
    'Name': 'Cubex Tubings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE144D01012'
  },
  {
    'Code': 'CUMMINSIND',
    'Name': 'Cummins India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE298A01020'
  },
  {
    'Code': 'CUPID',
    'Name': 'Cupid Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE509F01011'
  },
  {
    'Code': 'CYBERMEDIA',
    'Name': 'Cyber Media (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278G01037'
  },
  {
    'Code': 'CYBERTECH',
    'Name': 'Cybertech Systems And Software Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE214A01019'
  },
  {
    'Code': 'CYIENT',
    'Name': 'Cyient Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE136B01020'
  },
  {
    'Code': 'DAAWAT',
    'Name': 'LT Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE818H01020'
  },
  {
    'Code': 'DABUR',
    'Name': 'Dabur India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE016A01026'
  },
  {
    'Code': 'DALBHARAT',
    'Name': 'Dalmia Bharat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00R701025'
  },
  {
    'Code': 'DALMIASUG',
    'Name': 'Dalmia Bharat Sugar and Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE495A01022'
  },
  {
    'Code': 'DAMODARIND',
    'Name': 'Damodar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE497D01022'
  },
  {
    'Code': 'DANGEE',
    'Name': 'Dangee Dums Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE688Y01022'
  },
  {
    'Code': 'DATAMATICS',
    'Name': 'Datamatics Global Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE365B01017'
  },
  {
    'Code': 'DATAPATTNS',
    'Name': 'Data Patterns (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0IX101010'
  },
  {
    'Code': 'DBCORP',
    'Name': 'D.B.Corp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE950I01011'
  },
  {
    'Code': 'DBL',
    'Name': 'Dilip Buildcon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE917M01012'
  },
  {
    'Code': 'DBOL',
    'Name': 'Dhampur Bio Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0I3401014'
  },
  {
    'Code': 'DBREALTY',
    'Name': 'D B Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE879I01012'
  },
  {
    'Code': 'DBSTOCKBRO',
    'Name': 'DB (International) Stock Brokers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE921B01025'
  },
  {
    'Code': 'DCAL',
    'Name': 'Dishman Carbogen Amcis Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE385W01011'
  },
  {
    'Code': 'DCBBANK',
    'Name': 'DCB Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE503A01015'
  },
  {
    'Code': 'DCI',
    'Name': 'Dc Infotech And Communication Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0A1101019'
  },
  {
    'Code': 'DCM',
    'Name': 'DCM  Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE498A01018'
  },
  {
    'Code': 'DCMFINSERV',
    'Name': 'DCM Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE891B01012'
  },
  {
    'Code': 'DCMNVL',
    'Name': 'DCM Nouvelle Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE08KP01019'
  },
  {
    'Code': 'DCMSHRIRAM',
    'Name': 'DCM Shriram Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE499A01024'
  },
  {
    'Code': 'DCMSRIND',
    'Name': 'DCM Shriram Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE843D01027'
  },
  {
    'Code': 'DCW',
    'Name': 'DCW Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE500A01029'
  },
  {
    'Code': 'DCXINDIA',
    'Name': 'DCX Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0KL801015'
  },
  {
    'Code': 'DECCANCE',
    'Name': 'Deccan Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583C01021'
  },
  {
    'Code': 'DEEPAKFERT',
    'Name': 'Deepak Fertilizers and Petrochemicals Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE501A01019'
  },
  {
    'Code': 'DEEPAKNTR',
    'Name': 'Deepak Nitrite Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE288B01029'
  },
  {
    'Code': 'DEEPENR',
    'Name': 'DEEP ENERGY RESOURCES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE677H01012'
  },
  {
    'Code': 'DEEPINDS',
    'Name': 'Deep Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0FHS01016'
  },
  {
    'Code': 'DELHIVERY',
    'Name': 'Delhivery Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE148O01028'
  },
  {
    'Code': 'DELPHIFX',
    'Name': 'DELPHI WORLD MONEY LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE726L01019'
  },
  {
    'Code': 'DELTACORP',
    'Name': 'Delta Corp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE124G01033'
  },
  {
    'Code': 'DELTAMAGNT',
    'Name': 'Delta Manufacturing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE393A01011'
  },
  {
    'Code': 'DEN',
    'Name': 'Den Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE947J01015'
  },
  {
    'Code': 'DENORA',
    'Name': 'De Nora India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE244A01016'
  },
  {
    'Code': 'DEVIT',
    'Name': 'Dev Information Technology Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE060X01026'
  },
  {
    'Code': 'DEVYANI',
    'Name': 'Devyani International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE872J01023'
  },
  {
    'Code': 'DGCONTENT',
    'Name': 'Digicontent Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03JI01017'
  },
  {
    'Code': 'DHAMPURSUG',
    'Name': 'Dhampur Sugar Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE041A01016'
  },
  {
    'Code': 'DHANBANK',
    'Name': 'Dhanlaxmi Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE680A01011'
  },
  {
    'Code': 'DHANI',
    'Name': 'Dhani Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE274G01010'
  },
  {
    'Code': 'DHANUKA',
    'Name': 'Dhanuka Agritech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE435G01025'
  },
  {
    'Code': 'DHARMAJ',
    'Name': 'Dharmaj Crop Guard Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00OQ01016'
  },
  {
    'Code': 'DHARSUGAR',
    'Name': 'Dharani Sugars&Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE988C01014'
  },
  {
    'Code': 'DHRUV',
    'Name': 'Dhruv Consultancy Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE506Z01015'
  },
  {
    'Code': 'DHUNINV',
    'Name': 'Dhunseri Investments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE320L01011'
  },
  {
    'Code': 'DIAMONDYD',
    'Name': 'Prataap Snacks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE393P01035'
  },
  {
    'Code': 'DIAPOWER',
    'Name': 'Diamond Power Infra Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE989C01012'
  },
  {
    'Code': 'DICIND',
    'Name': 'DIC India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE303A01010'
  },
  {
    'Code': 'DIGISPICE',
    'Name': 'DiGiSPICE Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE927C01020'
  },
  {
    'Code': 'DIGJAMLMTD',
    'Name': 'Digjam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE731U01028'
  },
  {
    'Code': 'DIGJAMLTD',
    'Name': 'Digjam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE731U01010'
  },
  {
    'Code': 'DIL',
    'Name': 'Debock Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE411Y01011'
  },
  {
    'Code': 'DISHTV',
    'Name': 'Dish TV India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE836F01026'
  },
  {
    'Code': 'DIVGIITTS',
    'Name': 'Divgi Torqtransfer Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE753U01022'
  },
  {
    'Code': 'DIVISLAB',
    'Name': 'Divi\'s Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE361B01024'
  },
  {
    'Code': 'DIVOPPBEES',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Dividend Opportunities',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'DIXON',
    'Name': 'Dixon Technologies (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE935N01020'
  },
  {
    'Code': 'DJML',
    'Name': 'DJ Mediaprint & Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0B1K01014'
  },
  {
    'Code': 'DLF',
    'Name': 'DLF Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE271C01023'
  },
  {
    'Code': 'DLINKINDIA',
    'Name': 'D-Link (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE250K01012'
  },
  {
    'Code': 'DMART',
    'Name': 'Avenue Supermarts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE192R01011'
  },
  {
    'Code': 'DMCC',
    'Name': 'DMCC SPECIALITY CHEMICALS LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE505A01010'
  },
  {
    'Code': 'DNAMEDIA',
    'Name': 'Diligent Media Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE016M01021'
  },
  {
    'Code': 'DODLA',
    'Name': 'Dodla Dairy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE021O01019'
  },
  {
    'Code': 'DOLATALGO',
    'Name': 'Dolat Algotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE966A01022'
  },
  {
    'Code': 'DOLLAR',
    'Name': 'Dollar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE325C01035'
  },
  {
    'Code': 'DOLPHINOFF',
    'Name': 'Dolphin Offshore Enterprises (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE920A01011'
  },
  {
    'Code': 'DONEAR',
    'Name': 'Donear Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE668D01028'
  },
  {
    'Code': 'DPABHUSHAN',
    'Name': 'D. P. Abhushan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE266Y01019'
  },
  {
    'Code': 'DPSCLTD',
    'Name': 'DPSC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE360C01024'
  },
  {
    'Code': 'DPWIRES',
    'Name': 'D P Wires Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE864X01013'
  },
  {
    'Code': 'DRCSYSTEMS',
    'Name': 'DRC Systems India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03RS01027'
  },
  {
    'Code': 'DREAMFOLKS',
    'Name': 'Dreamfolks Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0JS101016'
  },
  {
    'Code': 'DREDGECORP',
    'Name': 'Dredging Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE506A01018'
  },
  {
    'Code': 'DRREDDY',
    'Name': 'Dr. Reddy\'s Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE089A01023'
  },
  {
    'Code': 'DSPN50ETF',
    'Name': 'DSP Blackrock Mutual Fund - DSP BlackRock Nifty 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'DSPNEWETF',
    'Name': 'DSP Investment Managers Private Limited - DSP Mutual Fund - DSP Nifty 50 Equal Weight ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'DSPQ50ETF',
    'Name': 'DSPQ50ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'DSPSILVETF',
    'Name': 'DSP Silver ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'DSSL',
    'Name': 'Dynacons Systems & Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE417B01040'
  },
  {
    'Code': 'DTIL',
    'Name': 'Dhunseri Tea & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE341R01014'
  },
  {
    'Code': 'DUCON',
    'Name': 'Ducon Infratechnologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE741L01018'
  },
  {
    'Code': 'DVL',
    'Name': 'Dhunseri Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE477B01010'
  },
  {
    'Code': 'DWARKESH',
    'Name': 'Dwarikesh Sugar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE366A01041'
  },
  {
    'Code': 'DYCL',
    'Name': 'Dynamic Cables Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE600Y01019'
  },
  {
    'Code': 'DYNAMATECH',
    'Name': 'Dynamatic Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE221B01012'
  },
  {
    'Code': 'DYNPRO',
    'Name': 'Dynemic Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE256H01015'
  },
  {
    'Code': 'E2E',
    'Name': 'E2E Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE255Z01019'
  },
  {
    'Code': 'EASEMYTRIP',
    'Name': 'Easy Trip Planners Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE07O001026'
  },
  {
    'Code': 'EASTSILK',
    'Name': 'Eastern Silk Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE962C01027'
  },
  {
    'Code': 'EASUNREYRL',
    'Name': 'Easun Reyrolle Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE268C01029'
  },
  {
    'Code': 'EBANK',
    'Name': 'Edelweiss Mutual Fund - Edelweiss ETF - Nifty Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF754K01EL1'
  },
  {
    'Code': 'EBBETF0425',
    'Name': 'Edelweiss Amc Ltd - Edelweiss Mutual Fund - Edelweiss Bharat Bond Exchange Traded Fund April 2025',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'EBBETF0430',
    'Name': 'Edelweiss Amc Ltd - Edelweiss Mutual Fund - Edelweiss Bharat Bond Exchange Traded Fund April 2030',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'EBBETF0431',
    'Name': 'Edelweiss Amc Ltd - Edelweiss Mutual Fund - Edelweiss Bharat Bond Exchange Traded Fund April 2031',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ECLERX',
    'Name': 'eClerx Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE738I01010'
  },
  {
    'Code': 'EDELWEISS',
    'Name': 'Edelweiss Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE532F01054'
  },
  {
    'Code': 'EDUCOMP',
    'Name': 'Educomp Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE216H01027'
  },
  {
    'Code': 'EICHERMOT',
    'Name': 'Eicher Motors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE066A01021'
  },
  {
    'Code': 'EIDPARRY',
    'Name': 'EID Parry India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE126A01031'
  },
  {
    'Code': 'EIFFL',
    'Name': 'Euro India Fresh Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE546V01010'
  },
  {
    'Code': 'EIHAHOTELS',
    'Name': 'EIH Associated Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE276C01014'
  },
  {
    'Code': 'EIHOTEL',
    'Name': 'EIH Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE230A01023'
  },
  {
    'Code': 'EIMCOELECO',
    'Name': 'Eimco Elecon (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE158B01016'
  },
  {
    'Code': 'EKC',
    'Name': 'Everest Kanto Cylinder Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE184H01027'
  },
  {
    'Code': 'ELDEHSG',
    'Name': 'Eldeco Housing And Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE668G01021'
  },
  {
    'Code': 'ELECON',
    'Name': 'Elecon Engineering Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE205B01023'
  },
  {
    'Code': 'ELECTCAST',
    'Name': 'Electrosteel Castings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE086A01029'
  },
  {
    'Code': 'ELECTHERM',
    'Name': 'Electrotherm (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE822G01016'
  },
  {
    'Code': 'ELGIEQUIP',
    'Name': 'Elgi Equipments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE285A01027'
  },
  {
    'Code': 'ELGIRUBCO',
    'Name': 'Elgi Rubber Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE819L01012'
  },
  {
    'Code': 'ELIN',
    'Name': 'Elin Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050401020'
  },
  {
    'Code': 'EMAMILTD',
    'Name': 'Emami Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE548C01032'
  },
  {
    'Code': 'EMAMIPAP',
    'Name': 'Emami Paper Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE830C01026'
  },
  {
    'Code': 'EMAMIREAL',
    'Name': 'Emami Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE778K01012'
  },
  {
    'Code': 'EMBASSY',
    'Name': 'Embassy Office Parks REIT',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'EMIL',
    'Name': 'Electronics Mart India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02YR01019'
  },
  {
    'Code': 'EMKAY',
    'Name': 'Emkay Global Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE296H01011'
  },
  {
    'Code': 'EMMBI',
    'Name': 'Emmbi Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE753K01015'
  },
  {
    'Code': 'EMUDHRA',
    'Name': 'eMudhra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01QM01018'
  },
  {
    'Code': 'ENDURANCE',
    'Name': 'Endurance Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE913H01037'
  },
  {
    'Code': 'ENERGYDEV',
    'Name': 'Energy Development Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE306C01019'
  },
  {
    'Code': 'ENGINERSIN',
    'Name': 'Engineers India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE510A01028'
  },
  {
    'Code': 'ENIL',
    'Name': 'Entertainment Network (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE265F01028'
  },
  {
    'Code': 'EON',
    'Name': 'Eon Electric Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE076H01025'
  },
  {
    'Code': 'EPL',
    'Name': 'EPL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE255A01020'
  },
  {
    'Code': 'EQUIPPP',
    'Name': 'Equippp Social Impact Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE217G01035'
  },
  {
    'Code': 'EQUITASBNK',
    'Name': 'Equitas Small Finance Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE063P01018'
  },
  {
    'Code': 'ERIS',
    'Name': 'Eris Lifesciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE406M01024'
  },
  {
    'Code': 'EROSMEDIA',
    'Name': 'Eros International Media Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE416L01017'
  },
  {
    'Code': 'ESABINDIA',
    'Name': 'Esab India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE284A01012'
  },
  {
    'Code': 'ESCORTS',
    'Name': 'Escorts Kubota Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE042A01014'
  },
  {
    'Code': 'ESSARSHPNG',
    'Name': 'Essar Shipping Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE122M01019'
  },
  {
    'Code': 'ESSENTIA',
    'Name': 'Integra Essentia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE418N01035'
  },
  {
    'Code': 'ESTER',
    'Name': 'Ester Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE778B01029'
  },
  {
    'Code': 'ETHOSLTD',
    'Name': 'Ethos Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE04TZ01018'
  },
  {
    'Code': 'EUROCERA',
    'Name': 'Euro Ceramics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE649H01011'
  },
  {
    'Code': 'EUROMULTI',
    'Name': 'Euro Multivision Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE063J01011'
  },
  {
    'Code': 'EUROTEXIND',
    'Name': 'Eurotex Industries and Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE022C01012'
  },
  {
    'Code': 'EVEREADY',
    'Name': 'Eveready Industries India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE128A01029'
  },
  {
    'Code': 'EVERESTIND',
    'Name': 'Everest Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE295A01018'
  },
  {
    'Code': 'EXCEL',
    'Name': 'Excel Realty N Infra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE688J01023'
  },
  {
    'Code': 'EXCELINDUS',
    'Name': 'Excel Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE369A01029'
  },
  {
    'Code': 'EXIDEIND',
    'Name': 'Exide Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE302A01020'
  },
  {
    'Code': 'EXPLEOSOL',
    'Name': 'Expleo Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE201K01015'
  },
  {
    'Code': 'EXXARO',
    'Name': 'Exxaro Tiles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0GFE01018'
  },
  {
    'Code': 'FACT',
    'Name': 'Fertilizers and Chemicals Travancore Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE188A01015'
  },
  {
    'Code': 'FAIRCHEMOR',
    'Name': 'Fairchem Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0DNW01011'
  },
  {
    'Code': 'FAZE3Q',
    'Name': 'Faze Three Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE963C01033'
  },
  {
    'Code': 'FCL',
    'Name': 'Fineotex Chemical Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE045J01026'
  },
  {
    'Code': 'FCONSUMER',
    'Name': 'Future Consumer Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE220J01025'
  },
  {
    'Code': 'FCSSOFT',
    'Name': 'FCS Software Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE512B01022'
  },
  {
    'Code': 'FDC',
    'Name': 'FDC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE258B01022'
  },
  {
    'Code': 'FEDERALBNK',
    'Name': 'The Federal Bank  Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE171A01029'
  },
  {
    'Code': 'FEL',
    'Name': 'Future Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE623B01027'
  },
  {
    'Code': 'FELDVR',
    'Name': 'Future Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'IN9623B01058'
  },
  {
    'Code': 'FIBERWEB',
    'Name': 'Fiberweb (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE296C01020'
  },
  {
    'Code': 'FIEMIND',
    'Name': 'Fiem Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE737H01014'
  },
  {
    'Code': 'FILATEX',
    'Name': 'Filatex India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE816B01035'
  },
  {
    'Code': 'FINCABLES',
    'Name': 'Finolex Cables Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE235A01022'
  },
  {
    'Code': 'FINEORG',
    'Name': 'Fine Organic Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE686Y01026'
  },
  {
    'Code': 'FINOPB',
    'Name': 'Fino Payments Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02NC01014'
  },
  {
    'Code': 'FINPIPE',
    'Name': 'Finolex Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE183A01024'
  },
  {
    'Code': 'FIVESTAR',
    'Name': 'Five-Star Business Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE128S01021'
  },
  {
    'Code': 'FLEXITUFF',
    'Name': 'Flexituff Ventures International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE060J01017'
  },
  {
    'Code': 'FLFL',
    'Name': 'Future Lifestyle Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE452O01016'
  },
  {
    'Code': 'FLUOROCHEM',
    'Name': 'Gujarat Fluorochemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE09N301011'
  },
  {
    'Code': 'FMGOETZE',
    'Name': 'Federal-Mogul Goetze (India) Limited.',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE529A01010'
  },
  {
    'Code': 'FMNL',
    'Name': 'Future Market Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE360L01017'
  },
  {
    'Code': 'FOCUS',
    'Name': 'Focus Lighting and Fixtures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE593W01010'
  },
  {
    'Code': 'FOODSIN',
    'Name': 'Foods & Inns Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE976E01023'
  },
  {
    'Code': 'FORCEMOT',
    'Name': 'FORCE MOTORS LTD',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE451A01017'
  },
  {
    'Code': 'FORTIS',
    'Name': 'Fortis Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE061F01013'
  },
  {
    'Code': 'FOSECOIND',
    'Name': 'Foseco India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE519A01011'
  },
  {
    'Code': 'FRETAIL',
    'Name': 'Future Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE752P01024'
  },
  {
    'Code': 'FROG-SM',
    'Name': 'FROG CELLSAT LTD',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'FSC',
    'Name': 'Future Supply Chain Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE935Q01015'
  },
  {
    'Code': 'FSL',
    'Name': 'Firstsource Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE684F01012'
  },
  {
    'Code': 'FUSION',
    'Name': 'Fusion Micro Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE139R01012'
  },
  {
    'Code': 'GABRIEL',
    'Name': 'Gabriel India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE524A01029'
  },
  {
    'Code': 'GAEL',
    'Name': 'Gujarat Ambuja Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE036B01030'
  },
  {
    'Code': 'GAIL',
    'Name': 'GAIL (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE129A01019'
  },
  {
    'Code': 'GAL',
    'Name': 'Gyscoal Alloys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE482J01021'
  },
  {
    'Code': 'GALAXYSURF',
    'Name': 'Galaxy Surfactants Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE600K01018'
  },
  {
    'Code': 'GALLANTT',
    'Name': 'Gallantt Ispat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE297H01019'
  },
  {
    'Code': 'GANDHITUBE',
    'Name': 'Gandhi Special Tubes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE524B01027'
  },
  {
    'Code': 'GANECOS',
    'Name': 'Ganesha Ecosphere Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE845D01014'
  },
  {
    'Code': 'GANESHBE',
    'Name': 'Ganesh Benzoplast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE388A01029'
  },
  {
    'Code': 'GANESHHOUC',
    'Name': 'Ganesh Housing Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE460C01014'
  },
  {
    'Code': 'GANGAFORGE',
    'Name': 'Ganga Forging Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE691Z01023'
  },
  {
    'Code': 'GANGESSECU',
    'Name': 'Ganges Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE335W01016'
  },
  {
    'Code': 'GANGOTRI',
    'Name': 'Gangotri Textiles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE670B01028'
  },
  {
    'Code': 'GARFIBRES',
    'Name': 'Garware Technical Fibres Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE276A01018'
  },
  {
    'Code': 'GATEWAY',
    'Name': 'Gateway Distriparks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE079J01017'
  },
  {
    'Code': 'GATI',
    'Name': 'GATI Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE152B01027'
  },
  {
    'Code': 'GAYAHWS',
    'Name': 'Gayatri Highways Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE287Z01012'
  },
  {
    'Code': 'GAYAPROJ',
    'Name': 'Gayatri Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE336H01023'
  },
  {
    'Code': 'GBGLOBAL',
    'Name': 'GB Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'GEECEE',
    'Name': 'GeeCee Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE916G01016'
  },
  {
    'Code': 'GEEKAYWIRE',
    'Name': 'Geekay Wires Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE669X01016'
  },
  {
    'Code': 'GENCON',
    'Name': 'Generic Engineering Construction and Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE854S01022'
  },
  {
    'Code': 'GENESYS',
    'Name': 'Genesys International Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE727B01026'
  },
  {
    'Code': 'GENUSPAPER',
    'Name': 'Genus Paper & Boards Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE949P01018'
  },
  {
    'Code': 'GENUSPOWER',
    'Name': 'Genus Power Infrastructures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE955D01029'
  },
  {
    'Code': 'GEOJITFSL',
    'Name': 'Geojit Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE007B01023'
  },
  {
    'Code': 'GEPIL',
    'Name': 'GE Power India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878A01011'
  },
  {
    'Code': 'GESHIP',
    'Name': 'The Great Eastern Shipping Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE017A01032'
  },
  {
    'Code': 'GET&D',
    'Name': 'GE T&D India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE200A01026'
  },
  {
    'Code': 'GFLLIMITED',
    'Name': 'GFL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE538A01037'
  },
  {
    'Code': 'GFSTEELS',
    'Name': 'Grand Foundry Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE534A01028'
  },
  {
    'Code': 'GHCL',
    'Name': 'GHCL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE539A01019'
  },
  {
    'Code': 'GHCLTEXTIL',
    'Name': 'GHCL TEXTILES LTD',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'GICHSGFIN',
    'Name': 'GIC Housing Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE289B01019'
  },
  {
    'Code': 'GICRE',
    'Name': 'General Insurance Corporation of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE481Y01014'
  },
  {
    'Code': 'GILLANDERS',
    'Name': 'Gillanders Arbuthnot & Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE047B01011'
  },
  {
    'Code': 'GILLETTE',
    'Name': 'Gillette India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE322A01010'
  },
  {
    'Code': 'GILT5YBEES',
    'Name': 'Nippon India ETF 5 Year Gilt',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'GINNIFILA',
    'Name': 'Ginni Filaments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE424C01010'
  },
  {
    'Code': 'GIPCL',
    'Name': 'Gujarat Industries Power Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE162A01010'
  },
  {
    'Code': 'GISOLUTION',
    'Name': 'GI Engineering Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE065J01016'
  },
  {
    'Code': 'GKWLIMITED',
    'Name': 'GKW Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE528A01020'
  },
  {
    'Code': 'GLAND',
    'Name': 'Gland Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE068V01023'
  },
  {
    'Code': 'GLAXO',
    'Name': 'GlaxoSmithKline Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE159A01016'
  },
  {
    'Code': 'GLENMARK',
    'Name': 'Glenmark Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE935A01035'
  },
  {
    'Code': 'GLFL',
    'Name': 'Gujarat Lease Financing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE540A01017'
  },
  {
    'Code': 'GLOBAL',
    'Name': 'Global Education Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE291W01029'
  },
  {
    'Code': 'GLOBALVECT',
    'Name': 'Global Vectra Helicorp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE792H01019'
  },
  {
    'Code': 'GLOBE',
    'Name': 'Globe Textiles (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE581X01021'
  },
  {
    'Code': 'GLOBUSSPR',
    'Name': 'Globus Spirits Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE615I01010'
  },
  {
    'Code': 'GLS',
    'Name': 'Glenmark Life Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03Q201024'
  },
  {
    'Code': 'GMBREW',
    'Name': 'GM Breweries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE075D01018'
  },
  {
    'Code': 'GMDCLTD',
    'Name': 'Gujarat Mineral Development Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE131A01031'
  },
  {
    'Code': 'GMMPFAUDLR',
    'Name': 'GMM Pfaudler Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE541A01023'
  },
  {
    'Code': 'GMRINFRA',
    'Name': 'GMR Airports Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE776C01039'
  },
  {
    'Code': 'GMRP&UI',
    'Name': 'GMR Power and Urban Infra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CU601026'
  },
  {
    'Code': 'GNA',
    'Name': 'GNA Axles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE934S01014'
  },
  {
    'Code': 'GNFC',
    'Name': 'Gujarat Narmada Valley Fertilizers and Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE113A01013'
  },
  {
    'Code': 'GOACARBON',
    'Name': 'Goa Carbon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE426D01013'
  },
  {
    'Code': 'GOCLCORP',
    'Name': 'GOCL Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE077F01035'
  },
  {
    'Code': 'GOCOLORS',
    'Name': 'Go Fashion (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0BJS01011'
  },
  {
    'Code': 'GODFRYPHLP',
    'Name': 'Godfrey Phillips India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE260B01028'
  },
  {
    'Code': 'GODHA',
    'Name': 'Godha Cabcon & Insulation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE925Y01036'
  },
  {
    'Code': 'GODREJAGRO',
    'Name': 'Godrej Agrovet Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE850D01014'
  },
  {
    'Code': 'GODREJCP',
    'Name': 'Godrej Consumer Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE102D01028'
  },
  {
    'Code': 'GODREJIND',
    'Name': 'Godrej Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE233A01035'
  },
  {
    'Code': 'GODREJPROP',
    'Name': 'Godrej Properties Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE484J01027'
  },
  {
    'Code': 'GOENKA',
    'Name': 'Goenka Diamond and Jewels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE516K01024'
  },
  {
    'Code': 'GOKEX',
    'Name': 'Gokaldas Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE887G01027'
  },
  {
    'Code': 'GOKUL',
    'Name': 'Gokul Refoils and Solvent Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE020J01029'
  },
  {
    'Code': 'GOKULAGRO',
    'Name': 'Gokul Agro Resources Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE314T01025'
  },
  {
    'Code': 'GOLDBEES',
    'Name': 'Reliance ETF Gold BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF204KB17I5'
  },
  {
    'Code': 'GOLDENTOBC',
    'Name': 'Golden Tobacco Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE973A01010'
  },
  {
    'Code': 'GOLDIAM',
    'Name': 'Goldiam International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE025B01025'
  },
  {
    'Code': 'GOLDSHARE',
    'Name': 'UTI Mutual Fund - UTI-Gold Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF789F01059'
  },
  {
    'Code': 'GOLDTECH',
    'Name': 'Goldstone Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE805A01014'
  },
  {
    'Code': 'GOODLUCK',
    'Name': 'Goodluck India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE127I01024'
  },
  {
    'Code': 'GOODYEAR',
    'Name': 'Goodyear India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE533A01012'
  },
  {
    'Code': 'GOYALALUM',
    'Name': 'Goyal Aluminiums Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE705X01018'
  },
  {
    'Code': 'GPIL',
    'Name': 'Godawari Power And Ispat limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE177H01021'
  },
  {
    'Code': 'GPPL',
    'Name': 'Gujarat Pipavav Port Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE517F01014'
  },
  {
    'Code': 'GPTINFRA',
    'Name': 'GPT Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE390G01014'
  },
  {
    'Code': 'GRANULES',
    'Name': 'Granules India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE101D01020'
  },
  {
    'Code': 'GRAPHITE',
    'Name': 'Graphite India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE371A01025'
  },
  {
    'Code': 'GRASIM',
    'Name': 'Grasim Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE047A01021'
  },
  {
    'Code': 'GRAUWEIL',
    'Name': 'Grauer & Weil (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE266D01021'
  },
  {
    'Code': 'GRAVITA',
    'Name': 'Gravita India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE024L01027'
  },
  {
    'Code': 'GREAVESCOT',
    'Name': 'Greaves Cotton Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE224A01026'
  },
  {
    'Code': 'GREENLAM',
    'Name': 'Greenlam Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE544R01021'
  },
  {
    'Code': 'GREENPANEL',
    'Name': 'Greenpanel Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE08ZM01014'
  },
  {
    'Code': 'GREENPLY',
    'Name': 'Greenply Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE461C01038'
  },
  {
    'Code': 'GREENPOWER',
    'Name': 'Orient Green Power Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE999K01014'
  },
  {
    'Code': 'GRINDWELL',
    'Name': 'Grindwell Norton Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE536A01023'
  },
  {
    'Code': 'GRINFRA',
    'Name': 'G R Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE201P01022'
  },
  {
    'Code': 'GRMOVER',
    'Name': 'GRM Overseas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE192H01020'
  },
  {
    'Code': 'GROBTEA',
    'Name': 'The Grob Tea Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE646C01018'
  },
  {
    'Code': 'GRPLTD',
    'Name': 'GRP Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE137I01015'
  },
  {
    'Code': 'GRSE',
    'Name': 'Garden Reach Shipbuilders & Engineers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE382Z01011'
  },
  {
    'Code': 'GRWRHITECH',
    'Name': 'Garware Hi-Tech Films Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE291A01017'
  },
  {
    'Code': 'GSFC',
    'Name': 'Gujarat State Fertilizers & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE026A01025'
  },
  {
    'Code': 'GSLSU',
    'Name': 'Global Surfaces Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0JSX01015'
  },
  {
    'Code': 'GSPL',
    'Name': 'Gujarat State Petronet Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE246F01010'
  },
  {
    'Code': 'GSS',
    'Name': 'GSS Infotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE871H01011'
  },
  {
    'Code': 'GTL',
    'Name': 'GTL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE043A01012'
  },
  {
    'Code': 'GTLINFRA',
    'Name': 'GTL Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE221H01019'
  },
  {
    'Code': 'GTPL',
    'Name': 'GTPL Hathway Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE869I01013'
  },
  {
    'Code': 'GUFICBIO',
    'Name': 'Gufic Biosciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE742B01025'
  },
  {
    'Code': 'GUJALKALI',
    'Name': 'Gujarat Alkalies and Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE186A01019'
  },
  {
    'Code': 'GUJAPOLLO',
    'Name': 'Gujarat Apollo Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE826C01016'
  },
  {
    'Code': 'GUJGASLTD',
    'Name': 'Gujarat Gas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE844O01030'
  },
  {
    'Code': 'GUJRAFFIA',
    'Name': 'Gujarat Raffia Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE610B01024'
  },
  {
    'Code': 'GULFOILLUB',
    'Name': 'Gulf Oil Lubricants India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE635Q01029'
  },
  {
    'Code': 'GULFPETRO',
    'Name': 'GP Petroleums Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE586G01017'
  },
  {
    'Code': 'GULPOLY',
    'Name': 'Gulshan Polyols Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE255D01024'
  },
  {
    'Code': 'GVKPIL',
    'Name': 'GVK Power & Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE251H01024'
  },
  {
    'Code': 'HAL',
    'Name': 'Hindustan Aeronautics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE066F01012'
  },
  {
    'Code': 'HAPPSTMNDS',
    'Name': 'Happiest Minds Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE419U01012'
  },
  {
    'Code': 'HARDWYN',
    'Name': 'Hardwyn India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE626Z01011'
  },
  {
    'Code': 'HARIOMPIPE',
    'Name': 'Hariom Pipe Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00EV01017'
  },
  {
    'Code': 'HARRMALAYA',
    'Name': 'Harrisons  Malayalam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE544A01019'
  },
  {
    'Code': 'HARSHA',
    'Name': 'Harsha Engineers International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0JUS01029'
  },
  {
    'Code': 'HATHWAY',
    'Name': 'Hathway Cable & Datacom Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE982F01036'
  },
  {
    'Code': 'HATSUN',
    'Name': 'Hatsun Agro Product Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE473B01035'
  },
  {
    'Code': 'HAVELLS',
    'Name': 'Havells India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE176B01034'
  },
  {
    'Code': 'HAVISHA',
    'Name': 'Sri Havisha Hospitality and Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE293B01029'
  },
  {
    'Code': 'HBLPOWER',
    'Name': 'HBL Power Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE292B01021'
  },
  {
    'Code': 'HBSL',
    'Name': 'HB Stockholdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE550B01022'
  },
  {
    'Code': 'HCC',
    'Name': 'Hindustan Construction Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE549A01026'
  },
  {
    'Code': 'HCG',
    'Name': 'Healthcare Global Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE075I01017'
  },
  {
    'Code': 'HCL-INSYS',
    'Name': 'HCL Infosystems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE236A01020'
  },
  {
    'Code': 'HCLTECH',
    'Name': 'HCL Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE860A01027'
  },
  {
    'Code': 'HDFC',
    'Name': 'Housing Development Finance Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE001A01036'
  },
  {
    'Code': 'HDFCAMC',
    'Name': 'HDFC Asset Management Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE127D01025'
  },
  {
    'Code': 'HDFCBANK',
    'Name': 'HDFC Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE040A01034'
  },
  {
    'Code': 'HDFCLIFE',
    'Name': 'HDFC Life Insurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE795G01014'
  },
  {
    'Code': 'HDFCMFGETF',
    'Name': 'HDFC Mutual Fund - HDFC Gold Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF179K01CN1'
  },
  {
    'Code': 'HDFCNEXT50',
    'Name': 'HDFC Mutual Fund - HDFC Nifty Next 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'HDFCNIF100',
    'Name': 'HDFC Nifty 100 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'HDFCNIFETF',
    'Name': 'HDFC Mutual Fund - HDFC Nifty 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF179KB1KP3'
  },
  {
    'Code': 'HDFCSENETF',
    'Name': 'HDFC Mutual Fund - HDFC Sensex ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF179KB1KQ1'
  },
  {
    'Code': 'HDIL',
    'Name': 'Housing Development and Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE191I01012'
  },
  {
    'Code': 'HEADSUP',
    'Name': 'Heads UP Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE759V01019'
  },
  {
    'Code': 'HEALTHY',
    'Name': 'Aditya Birla Sun Life Nifty Healthcare ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'HECPROJECT',
    'Name': 'HEC Infra Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE558R01013'
  },
  {
    'Code': 'HEG',
    'Name': 'HEG Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE545A01016'
  },
  {
    'Code': 'HEIDELBERG',
    'Name': 'HeidelbergCement India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE578A01017'
  },
  {
    'Code': 'HEMIPROP',
    'Name': 'Hemisphere Properties India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0AJG01018'
  },
  {
    'Code': 'HERANBA',
    'Name': 'Heranba Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE694N01015'
  },
  {
    'Code': 'HERCULES',
    'Name': 'Hercules Hoists Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE688E01024'
  },
  {
    'Code': 'HERITGFOOD',
    'Name': 'Heritage Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE978A01027'
  },
  {
    'Code': 'HEROMOTOCO',
    'Name': 'Hero MotoCorp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE158A01026'
  },
  {
    'Code': 'HESTERBIO',
    'Name': 'Hester Biosciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE782E01017'
  },
  {
    'Code': 'HEUBACHIND',
    'Name': 'Heubach Colorants India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE492A01029'
  },
  {
    'Code': 'HEXATRADEX',
    'Name': 'Hexa Tradex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE750M01017'
  },
  {
    'Code': 'HFCL',
    'Name': 'HFCL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE548A01028'
  },
  {
    'Code': 'HGINFRA',
    'Name': 'H.G. Infra Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE926X01010'
  },
  {
    'Code': 'HGS',
    'Name': 'Hinduja Global Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE170I01016'
  },
  {
    'Code': 'HIKAL',
    'Name': 'Hikal Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE475B01022'
  },
  {
    'Code': 'HIL',
    'Name': 'HIL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE557A01011'
  },
  {
    'Code': 'HILTON',
    'Name': 'Hilton Metal Forging Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE788H01017'
  },
  {
    'Code': 'HIMATSEIDE',
    'Name': 'Himatsingka Seide Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE049A01027'
  },
  {
    'Code': 'HINDALCO',
    'Name': 'Hindalco Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE038A01020'
  },
  {
    'Code': 'HINDCOMPOS',
    'Name': 'Hindustan Composites Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE310C01029'
  },
  {
    'Code': 'HINDCON',
    'Name': 'Hindcon Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE642Y01011'
  },
  {
    'Code': 'HINDCOPPER',
    'Name': 'Hindustan Copper Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE531E01026'
  },
  {
    'Code': 'HINDMOTORS',
    'Name': 'Hindustan Motors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE253A01025'
  },
  {
    'Code': 'HINDNATGLS',
    'Name': 'Hindusthan National Glass & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE952A01022'
  },
  {
    'Code': 'HINDOILEXP',
    'Name': 'Hindustan Oil Exploration Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE345A01011'
  },
  {
    'Code': 'HINDPETRO',
    'Name': 'Hindustan Petroleum Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE094A01015'
  },
  {
    'Code': 'HINDUNILVR',
    'Name': 'Hindustan Unilever Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE030A01027'
  },
  {
    'Code': 'HINDWAREAP',
    'Name': 'Hindware Home Innovation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE05AN01011'
  },
  {
    'Code': 'HINDZINC',
    'Name': 'Hindustan Zinc Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE267A01025'
  },
  {
    'Code': 'HIRECT',
    'Name': 'Hind Rectifiers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE835D01023'
  },
  {
    'Code': 'HISARMETAL',
    'Name': 'Hisar Metal Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE598C01011'
  },
  {
    'Code': 'HITECH',
    'Name': 'Hi-Tech Pipes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE106T01025'
  },
  {
    'Code': 'HITECHCORP',
    'Name': 'Hitech Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE120D01012'
  },
  {
    'Code': 'HITECHGEAR',
    'Name': 'The Hi-Tech Gears Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE127B01011'
  },
  {
    'Code': 'HLEGLAS',
    'Name': 'HLE Glascoat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE461D01028'
  },
  {
    'Code': 'HLVLTD',
    'Name': 'HLV LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE102A01024'
  },
  {
    'Code': 'HMT',
    'Name': 'HMT Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE262A01018'
  },
  {
    'Code': 'HMVL',
    'Name': 'Hindustan Media Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE871K01015'
  },
  {
    'Code': 'HNDFDS',
    'Name': 'Hindustan Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE254N01026'
  },
  {
    'Code': 'HNGSNGBEES',
    'Name': 'Nippon India ETF Hang Seng BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01227'
  },
  {
    'Code': 'HOMEFIRST',
    'Name': 'Home First Finance Company India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE481N01025'
  },
  {
    'Code': 'HONAUT',
    'Name': 'Honeywell Automation India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE671A01010'
  },
  {
    'Code': 'HONDAPOWER',
    'Name': 'Honda India Power Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE634A01018'
  },
  {
    'Code': 'HOVS',
    'Name': 'HOV Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE596H01014'
  },
  {
    'Code': 'HPAL',
    'Name': 'HP Adhesives Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0GSL01016'
  },
  {
    'Code': 'HPIL',
    'Name': 'Hindprakash Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE05X901010'
  },
  {
    'Code': 'HPL',
    'Name': 'HPL Electric & Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE495S01016'
  },
  {
    'Code': 'HSCL',
    'Name': 'Himadri Speciality Chemical Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE019C01026'
  },
  {
    'Code': 'HTMEDIA',
    'Name': 'HT Media Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE501G01024'
  },
  {
    'Code': 'HUBTOWN',
    'Name': 'Hubtown Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE703H01016'
  },
  {
    'Code': 'HUDCO',
    'Name': 'Housing & Urban Development Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE031A01017'
  },
  {
    'Code': 'HUHTAMAKI',
    'Name': 'Huhtamaki India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE275B01026'
  },
  {
    'Code': 'HYBRIDFIN',
    'Name': 'Hybrid Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE965B01022'
  },
  {
    'Code': 'IBMFNIFTY',
    'Name': 'Indiabulls Nifty50 Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'IBREALEST',
    'Name': 'Indiabulls Real Estate Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE069I01010'
  },
  {
    'Code': 'IBULHSGFIN',
    'Name': 'Indiabulls Housing Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE148I01020'
  },
  {
    'Code': 'ICDSLTD',
    'Name': 'ICDS Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE613B01010'
  },
  {
    'Code': 'ICEMAKE',
    'Name': 'Ice Make Refrigeration Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE520Y01019'
  },
  {
    'Code': 'ICICI500',
    'Name': 'ICICI Prudential S&P BSE 500 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICI5GSEC',
    'Name': 'Icici Prudential Amc Ltd. - Icici Prudential Mutual Fund - Icici Prudential 5 Year G-Sec ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIALPLV',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Alpha Low Vol 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIAUTO',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Nifty Auto ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIB22',
    'Name': 'ICICI Prudential Mutual Fund - Bharat 22 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIBANK',
    'Name': 'ICICI Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE090A01021'
  },
  {
    'Code': 'ICICIBANKN',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Bank ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIBANKP',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Private Banks ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICICONSU',
    'Name': 'ICICICONSU',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIFMCG',
    'Name': 'ICICI Prudential Nifty FMCG ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIGI',
    'Name': 'ICICI Lombard General Insurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE765G01017'
  },
  {
    'Code': 'ICICIGOLD',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Gold Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIINFRA',
    'Name': 'ICICI Prudential Nifty Infrastructure ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICILIQ',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Liquid ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICILOVOL',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Nifty Low Vol 30 iWIN ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIM150',
    'Name': 'ICICI Prudential Amc Ltd. - ICICI Prudential Mutual Fund ICICI Prudential Midcap 150 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIMCAP',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Midcap Select ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIMOM30',
    'Name': 'ICICI Prudential Nifty 200 Momentum 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICINF100',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Nifty 100 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICINIFTY',
    'Name': 'ICICI Prudential Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF109K012R6'
  },
  {
    'Code': 'ICICINV20',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Fixed Maturity Plan - Series 79 - 1126 Days Plan C',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICINXT50',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Nifty Next 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIPHARM',
    'Name': 'ICICI Prudential Nifty Healthcare ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICIPRULI',
    'Name': 'ICICI Prudential Life Insurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE726G01019'
  },
  {
    'Code': 'ICICISENSX',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Sensex ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICISILVE',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential Silver ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICICITECH',
    'Name': 'ICICI Prudential Mutual Fund - ICICI Prudential IT ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ICIL',
    'Name': 'Indo Count Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE483B01026'
  },
  {
    'Code': 'ICRA',
    'Name': 'ICRA Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE725G01011'
  },
  {
    'Code': 'ICSA',
    'Name': 'ICSA India Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE306B01029'
  },
  {
    'Code': 'IDBI',
    'Name': 'IDBI Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE008A01015'
  },
  {
    'Code': 'IDBIGOLD',
    'Name': 'IDBI MF Gold ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF397L01554'
  },
  {
    'Code': 'IDEA',
    'Name': 'Vodafone Idea Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE669E01016'
  },
  {
    'Code': 'IDFC',
    'Name': 'IDFC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE043D01016'
  },
  {
    'Code': 'IDFCFIRSTB',
    'Name': 'IDFC First Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE092T01019'
  },
  {
    'Code': 'IDFNIFTYET',
    'Name': 'IDFC Mutual Fund - IDFC Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF194KA1U07'
  },
  {
    'Code': 'IEL',
    'Name': 'Indiabulls Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE059901020'
  },
  {
    'Code': 'IEX',
    'Name': 'Indian Energy Exchange Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE022Q01020'
  },
  {
    'Code': 'IFBAGRO',
    'Name': 'IFB Agro Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE076C01018'
  },
  {
    'Code': 'IFBIND',
    'Name': 'IFB Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE559A01017'
  },
  {
    'Code': 'IFCI',
    'Name': 'IFCI Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE039A01010'
  },
  {
    'Code': 'IFGLEXPOR',
    'Name': 'IFGL Refractories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE133Y01011'
  },
  {
    'Code': 'IGARASHI',
    'Name': 'Igarashi Motors India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE188B01013'
  },
  {
    'Code': 'IGL',
    'Name': 'Indraprastha Gas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE203G01027'
  },
  {
    'Code': 'IGPL',
    'Name': 'IG Petrochemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE204A01010'
  },
  {
    'Code': 'IIFL',
    'Name': 'IIFL Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE530B01024'
  },
  {
    'Code': 'IIFLSEC',
    'Name': 'IIFL Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE489L01022'
  },
  {
    'Code': 'IITL',
    'Name': 'Industrial Investment Trust Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE886A01014'
  },
  {
    'Code': 'IKIO',
    'Name': 'IKIO Lighting Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'IL&FSENGG',
    'Name': 'IL&FS Engineering and Construction Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE369I01014'
  },
  {
    'Code': 'IL&FSTRANS',
    'Name': 'IL&FS Transportation Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE975G01012'
  },
  {
    'Code': 'IMAGICAA',
    'Name': 'Imagicaaworld Entertainment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE172N01012'
  },
  {
    'Code': 'IMFA',
    'Name': 'Indian Metals & Ferro Alloys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE919H01018'
  },
  {
    'Code': 'IMPAL',
    'Name': 'India Motor Parts and Accessories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE547E01014'
  },
  {
    'Code': 'IMPEXFERRO',
    'Name': 'Impex Ferro Tech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE691G01015'
  },
  {
    'Code': 'INCREDIBLE',
    'Name': 'INCREDIBLE INDUSTRIES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE452L01012'
  },
  {
    'Code': 'INDBANK',
    'Name': 'Indbank Merchant Banking Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE841B01017'
  },
  {
    'Code': 'INDHOTEL',
    'Name': 'The Indian Hotels Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE053A01029'
  },
  {
    'Code': 'INDIACEM',
    'Name': 'The India Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE383A01012'
  },
  {
    'Code': 'INDIAGLYCO',
    'Name': 'India Glycols Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE560A01015'
  },
  {
    'Code': 'INDIAMART',
    'Name': 'Indiamart Intermesh Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE933S01016'
  },
  {
    'Code': 'INDIANB',
    'Name': 'Indian Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE562A01011'
  },
  {
    'Code': 'INDIANCARD',
    'Name': 'Indian Card Clothing Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE061A01014'
  },
  {
    'Code': 'INDIANHUME',
    'Name': 'Indian Hume Pipe Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE323C01030'
  },
  {
    'Code': 'INDIGO',
    'Name': 'InterGlobe Aviation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE646L01027'
  },
  {
    'Code': 'INDIGOPNTS',
    'Name': 'Indigo Paints Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE09VQ01012'
  },
  {
    'Code': 'INDIGRID-IV',
    'Name': 'India Grid Trust',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE219X23014'
  },
  {
    'Code': 'INDLMETER',
    'Name': 'IMP Powers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE065B01013'
  },
  {
    'Code': 'INDNIPPON',
    'Name': 'India Nippon Electricals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE092B01025'
  },
  {
    'Code': 'INDOAMIN',
    'Name': 'Indo Amines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE760F01028'
  },
  {
    'Code': 'INDOBORAX',
    'Name': 'Indo Borax & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE803D01021'
  },
  {
    'Code': 'INDOCO',
    'Name': 'Indoco Remedies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE873D01024'
  },
  {
    'Code': 'INDORAMA',
    'Name': 'Indo Rama Synthetics (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE156A01020'
  },
  {
    'Code': 'INDOSOLAR',
    'Name': 'Indosolar Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE866K01015'
  },
  {
    'Code': 'INDOSTAR',
    'Name': 'IndoStar Capital Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE896L01010'
  },
  {
    'Code': 'INDOTECH',
    'Name': 'Indo Tech Transformers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE332H01014'
  },
  {
    'Code': 'INDOTHAI',
    'Name': 'Indo Thai Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE337M01013'
  },
  {
    'Code': 'INDOWIND',
    'Name': 'Indowind Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE227G01018'
  },
  {
    'Code': 'INDRAMEDCO',
    'Name': 'Indraprastha Medical Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE681B01017'
  },
  {
    'Code': 'INDSWFTLAB',
    'Name': 'Ind-Swift Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE915B01019'
  },
  {
    'Code': 'INDSWFTLTD',
    'Name': 'Ind-Swift Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE788B01028'
  },
  {
    'Code': 'INDTERRAIN',
    'Name': 'Indian Terrain Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE611L01021'
  },
  {
    'Code': 'INDUSINDBK',
    'Name': 'IndusInd Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE095A01012'
  },
  {
    'Code': 'INDUSTOWER',
    'Name': 'Indus Towers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE121J01017'
  },
  {
    'Code': 'INFIBEAM',
    'Name': 'Infibeam Avenues Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE483S01020'
  },
  {
    'Code': 'INFOBEAN',
    'Name': 'InfoBeans Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE344S01016'
  },
  {
    'Code': 'INFOMEDIA',
    'Name': 'Infomedia Press Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE669A01022'
  },
  {
    'Code': 'INFRABEES',
    'Name': 'Nippon Mutual Funds - Nippon ETF Infra BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01268'
  },
  {
    'Code': 'INFY',
    'Name': 'Infosys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE009A01021'
  },
  {
    'Code': 'INGERRAND',
    'Name': 'Ingersoll Rand (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE177A01018'
  },
  {
    'Code': 'INOXGREEN',
    'Name': 'Inox Green Energy Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE510W01014'
  },
  {
    'Code': 'INOXWIND',
    'Name': 'Inox Wind Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE066P01011'
  },
  {
    'Code': 'INSECTICID',
    'Name': 'Insecticides (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE070I01018'
  },
  {
    'Code': 'INSPIRISYS',
    'Name': 'Inspirisys Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE020G01017'
  },
  {
    'Code': 'INTELLECT',
    'Name': 'Intellect Design Arena Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE306R01017'
  },
  {
    'Code': 'INTENTECH',
    'Name': 'Intense Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE781A01025'
  },
  {
    'Code': 'INTLCONV',
    'Name': 'International Conveyors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE575C01027'
  },
  {
    'Code': 'INVENTURE',
    'Name': 'Inventure Growth & Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878H01024'
  },
  {
    'Code': 'IOB',
    'Name': 'Indian Overseas Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE565A01014'
  },
  {
    'Code': 'IOC',
    'Name': 'Indian Oil Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE242A01010'
  },
  {
    'Code': 'IOLCP',
    'Name': 'IOL Chemicals and Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE485C01011'
  },
  {
    'Code': 'IONEXCHANG',
    'Name': 'ION Exchange (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE570A01014'
  },
  {
    'Code': 'IPCALAB',
    'Name': 'IPCA Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE571A01038'
  },
  {
    'Code': 'IPL',
    'Name': 'India Pesticides Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0D6701023'
  },
  {
    'Code': 'IRB',
    'Name': 'IRB Infrastructure Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE821I01022'
  },
  {
    'Code': 'IRBINVIT',
    'Name': 'IRB InvIT Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE183W23014'
  },
  {
    'Code': 'IRCON',
    'Name': 'Ircon International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE962Y01021'
  },
  {
    'Code': 'IRCTC',
    'Name': 'Indian Railway Catering And Tourism Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE335Y01020'
  },
  {
    'Code': 'IRFC',
    'Name': 'Indian Railway Finance Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE053F01010'
  },
  {
    'Code': 'IRIS',
    'Name': 'Iris Business Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE864K01010'
  },
  {
    'Code': 'IRISDOREME',
    'Name': 'Iris Clothings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01GN01017'
  },
  {
    'Code': 'ISEC',
    'Name': 'ICICI Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE763G01038'
  },
  {
    'Code': 'ISFT',
    'Name': 'Intrasoft Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE566K01011'
  },
  {
    'Code': 'ISGEC',
    'Name': 'Isgec Heavy Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE858B01029'
  },
  {
    'Code': 'ISMTLTD',
    'Name': 'ISMT Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE732F01019'
  },
  {
    'Code': 'ITBEES',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Nifty IT',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'ITC',
    'Name': 'ITC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE154A01025'
  },
  {
    'Code': 'ITDC',
    'Name': 'India Tourism Development Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE353K01014'
  },
  {
    'Code': 'ITDCEM',
    'Name': 'ITD Cementation India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE686A01026'
  },
  {
    'Code': 'ITI',
    'Name': 'ITI Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE248A01017'
  },
  {
    'Code': 'IVC',
    'Name': 'IL&FS Investment Managers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050B01023'
  },
  {
    'Code': 'IVP',
    'Name': 'IVP Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE043C01018'
  },
  {
    'Code': 'IVZINGOLD',
    'Name': 'Invesco India Gold ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF205K01361'
  },
  {
    'Code': 'IVZINNIFTY',
    'Name': 'Invesco Mutual Fund - Invesco India Nifty Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF205K01DA9'
  },
  {
    'Code': 'IWEL',
    'Name': 'Inox Wind Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0FLR01028'
  },
  {
    'Code': 'IZMO',
    'Name': 'IZMO Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE848A01014'
  },
  {
    'Code': 'J&KBANK',
    'Name': 'The Jammu & Kashmir Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE168A01041'
  },
  {
    'Code': 'JAGRAN',
    'Name': 'Jagran Prakashan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE199G01027'
  },
  {
    'Code': 'JAGSNPHARM',
    'Name': 'Jagsonpal Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE048B01027'
  },
  {
    'Code': 'JAIBALAJI',
    'Name': 'Jai Balaji Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE091G01018'
  },
  {
    'Code': 'JAICORPLTD',
    'Name': 'Jai Corp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE070D01027'
  },
  {
    'Code': 'JAINSTUDIO',
    'Name': 'Jain Studios Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE486B01011'
  },
  {
    'Code': 'JAIPURKURT',
    'Name': 'Nandani Creation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE696V01013'
  },
  {
    'Code': 'JAMNAAUTO',
    'Name': 'Jamna Auto Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE039C01032'
  },
  {
    'Code': 'JASH',
    'Name': 'Jash Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE039O01011'
  },
  {
    'Code': 'JAYAGROGN',
    'Name': 'Jayant Agro Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE785A01026'
  },
  {
    'Code': 'JAYBARMARU',
    'Name': 'Jay Bharat Maruti Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE571B01028'
  },
  {
    'Code': 'JAYNECOIND',
    'Name': 'Jayaswal Neco Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE854B01010'
  },
  {
    'Code': 'JAYSREETEA',
    'Name': 'Jayshree Tea & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE364A01020'
  },
  {
    'Code': 'JBCHEPHARM',
    'Name': 'JB Chemicals & Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE572A01028'
  },
  {
    'Code': 'JBFIND',
    'Name': 'JBF Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE187A01017'
  },
  {
    'Code': 'JBMA',
    'Name': 'JBM Auto Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE927D01044'
  },
  {
    'Code': 'JCHAC',
    'Name': 'Johnson Controls - Hitachi Air Conditioning India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE782A01015'
  },
  {
    'Code': 'JETAIRWAYS',
    'Name': 'Jet Airways (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE802G01018'
  },
  {
    'Code': 'JETFREIGHT',
    'Name': 'Jet Freight Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE982V01025'
  },
  {
    'Code': 'JHS',
    'Name': 'JHS Svendgaard Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE544H01014'
  },
  {
    'Code': 'JIKIND',
    'Name': 'JIK Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE026B01049'
  },
  {
    'Code': 'JINDALPHOT',
    'Name': 'Jindal Photo Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE796G01012'
  },
  {
    'Code': 'JINDALPOLY',
    'Name': 'Jindal Poly Films Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE197D01010'
  },
  {
    'Code': 'JINDALSAW',
    'Name': 'Jindal Saw Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE324A01024'
  },
  {
    'Code': 'JINDALSTEL',
    'Name': 'Jindal Steel & Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE749A01030'
  },
  {
    'Code': 'JINDCOT',
    'Name': 'Jindal Cotex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE904J01016'
  },
  {
    'Code': 'JINDRILL',
    'Name': 'Jindal Drilling And Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE742C01031'
  },
  {
    'Code': 'JINDWORLD',
    'Name': 'Jindal Worldwide Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE247D01039'
  },
  {
    'Code': 'JISLDVREQS',
    'Name': 'Jain Irrigation Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'IN9175A01010'
  },
  {
    'Code': 'JISLJALEQS',
    'Name': 'Jain Irrigation Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE175A01038'
  },
  {
    'Code': 'JITFINFRA',
    'Name': 'JITF Infralogistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE863T01013'
  },
  {
    'Code': 'JKCEMENT',
    'Name': 'JK Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE823G01014'
  },
  {
    'Code': 'JKIL',
    'Name': 'J.Kumar Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE576I01022'
  },
  {
    'Code': 'JKLAKSHMI',
    'Name': 'JK Lakshmi Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE786A01032'
  },
  {
    'Code': 'JKPAPER',
    'Name': 'JK Paper Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE789E01012'
  },
  {
    'Code': 'JKTYRE',
    'Name': 'JK Tyre & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE573A01042'
  },
  {
    'Code': 'JMA',
    'Name': 'Jullundur Motor Agency (Delhi) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE412C01023'
  },
  {
    'Code': 'JMFINANCIL',
    'Name': 'JM Financial Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE780C01023'
  },
  {
    'Code': 'JMTAUTOLTD',
    'Name': 'JMT Auto Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE988E01036'
  },
  {
    'Code': 'JOCIL',
    'Name': 'Jocil Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE839G01010'
  },
  {
    'Code': 'JPASSOCIAT',
    'Name': 'Jaiprakash Associates Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE455F01025'
  },
  {
    'Code': 'JPINFRATEC',
    'Name': 'Jaypee Infratech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE099J01015'
  },
  {
    'Code': 'JPOLYINVST',
    'Name': 'Jindal Poly Investment and Finance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE147P01019'
  },
  {
    'Code': 'JPPOWER',
    'Name': 'Jaiprakash Power Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE351F01018'
  },
  {
    'Code': 'JSL',
    'Name': 'Jindal Stainless Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE220G01021'
  },
  {
    'Code': 'JSWENERGY',
    'Name': 'JSW Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE121E01018'
  },
  {
    'Code': 'JSWHL',
    'Name': 'JSW Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE824G01012'
  },
  {
    'Code': 'JSWISPL',
    'Name': 'JSW Ispat Special Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE743C01021'
  },
  {
    'Code': 'JSWSTEEL',
    'Name': 'JSW Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE019A01038'
  },
  {
    'Code': 'JTEKTINDIA',
    'Name': 'Jtekt India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE643A01035'
  },
  {
    'Code': 'JTLIND',
    'Name': 'JTL Industries Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE391J01024'
  },
  {
    'Code': 'JUBLFOOD',
    'Name': 'Jubilant Foodworks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE797F01020'
  },
  {
    'Code': 'JUBLINDS',
    'Name': 'Jubilant Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE645L01011'
  },
  {
    'Code': 'JUBLINGREA',
    'Name': 'Jubilant Ingrevia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0BY001018'
  },
  {
    'Code': 'JUBLPHARMA',
    'Name': 'Jubilant Pharmova Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE700A01033'
  },
  {
    'Code': 'JUNIORBEES',
    'Name': 'Nippon Mutual Funds - Nippon ETF Junior BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01045'
  },
  {
    'Code': 'JUSTDIAL',
    'Name': 'Just Dial Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE599M01018'
  },
  {
    'Code': 'JWL',
    'Name': 'Jupiter Wagons Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE209L01016'
  },
  {
    'Code': 'JYOTHYLAB',
    'Name': 'Jyothy Labs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE668F01031'
  },
  {
    'Code': 'JYOTISTRUC',
    'Name': 'Jyoti Structures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE197A01024'
  },
  {
    'Code': 'KABRAEXTRU',
    'Name': 'Kabra Extrusion Technik Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE900B01029'
  },
  {
    'Code': 'KAJARIACER',
    'Name': 'Kajaria Ceramics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE217B01036'
  },
  {
    'Code': 'KAKATCEM',
    'Name': 'Kakatiya Cement Sugar & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE437B01014'
  },
  {
    'Code': 'KALPATPOWR',
    'Name': 'Kalpataru Power Transmission Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE220B01022'
  },
  {
    'Code': 'KALYANIFRG',
    'Name': 'Kalyani Forge Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE314G01014'
  },
  {
    'Code': 'KALYANKJIL',
    'Name': 'Kalyan Jewellers India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE303R01014'
  },
  {
    'Code': 'KAMATHOTEL',
    'Name': 'Kamat Hotels (I) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE967C01018'
  },
  {
    'Code': 'KAMDHENU',
    'Name': 'Kamdhenu Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE390H01012'
  },
  {
    'Code': 'KAMOPAINTS',
    'Name': 'Kamdhenu Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0BTI01029'
  },
  {
    'Code': 'KANANIIND',
    'Name': 'Kanani Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE879E01037'
  },
  {
    'Code': 'KANORICHEM',
    'Name': 'Kanoria Chemicals & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE138C01024'
  },
  {
    'Code': 'KANPRPLA',
    'Name': 'Kanpur Plastipack Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE694E01014'
  },
  {
    'Code': 'KANSAINER',
    'Name': 'Kansai Nerolac Paints Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE531A01024'
  },
  {
    'Code': 'KAPSTON',
    'Name': 'Kapston Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE542Z01010'
  },
  {
    'Code': 'KARMAENG',
    'Name': 'Karma Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE725L01011'
  },
  {
    'Code': 'KARURVYSYA',
    'Name': 'Karur Vysya Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE036D01028'
  },
  {
    'Code': 'KAUSHALYA',
    'Name': 'Kaushalya Infrastructure Development Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE234I01010'
  },
  {
    'Code': 'KAVVERITEL',
    'Name': 'Kavveri Telecom Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE641C01019'
  },
  {
    'Code': 'KAYA',
    'Name': 'Kaya Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE587G01015'
  },
  {
    'Code': 'KAYNES',
    'Name': 'Kaynes Technology India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE918Z01012'
  },
  {
    'Code': 'KBCGLOBAL',
    'Name': 'KBC Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278R01034'
  },
  {
    'Code': 'KCP',
    'Name': 'KCP Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE805C01028'
  },
  {
    'Code': 'KCPSUGIND',
    'Name': 'KCP Sugar and Industries Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE790B01024'
  },
  {
    'Code': 'KDDL',
    'Name': 'KDDL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE291D01011'
  },
  {
    'Code': 'KEC',
    'Name': 'KEC International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE389H01022'
  },
  {
    'Code': 'KECL',
    'Name': 'Kirloskar Electric Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE134B01017'
  },
  {
    'Code': 'KEEPLEARN',
    'Name': 'DSJ Keep Learning Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE055C01020'
  },
  {
    'Code': 'KEERTI',
    'Name': 'Keerti Knowledge and Skills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE586X01012'
  },
  {
    'Code': 'KEI',
    'Name': 'KEI Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878B01027'
  },
  {
    'Code': 'KELLTONTEC',
    'Name': 'Kellton Tech Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE164B01022'
  },
  {
    'Code': 'KENNAMET',
    'Name': 'Kennametal India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE717A01029'
  },
  {
    'Code': 'KERNEX',
    'Name': 'Kernex Microsystems (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE202H01019'
  },
  {
    'Code': 'KESORAMIND',
    'Name': 'Kesoram Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE087A01019'
  },
  {
    'Code': 'KEYFINSERV',
    'Name': 'Keynote Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE681C01015'
  },
  {
    'Code': 'KFINTECH',
    'Name': 'Kfin Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE138Y01010'
  },
  {
    'Code': 'KGL',
    'Name': 'Karuturi Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE299C01024'
  },
  {
    'Code': 'KHADIM',
    'Name': 'Khadim India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE834I01025'
  },
  {
    'Code': 'KHAICHEM',
    'Name': 'Khaitan Chemicals & Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE745B01028'
  },
  {
    'Code': 'KHAITANLTD',
    'Name': 'Khaitan (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE731C01018'
  },
  {
    'Code': 'KHANDSE',
    'Name': 'Khandwala Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE060B01014'
  },
  {
    'Code': 'KICL',
    'Name': 'Kalyani Investment Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE029L01018'
  },
  {
    'Code': 'KILITCH',
    'Name': 'Kilitch Drugs (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE729D01010'
  },
  {
    'Code': 'KIMS',
    'Name': 'Krishna Institute of Medical Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE967H01017'
  },
  {
    'Code': 'KINGFA',
    'Name': 'Kingfa Science & Technology (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE473D01015'
  },
  {
    'Code': 'KIOCL',
    'Name': 'KIOCL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE880L01014'
  },
  {
    'Code': 'KIRIINDUS',
    'Name': 'Kiri Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE415I01015'
  },
  {
    'Code': 'KIRLFER',
    'Name': 'Kirloskar Ferrous Industries Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE884B01025'
  },
  {
    'Code': 'KIRLOSBROS',
    'Name': 'Kirloskar Brothers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE732A01036'
  },
  {
    'Code': 'KIRLOSENG',
    'Name': 'Kirloskar Oil Engines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE146L01010'
  },
  {
    'Code': 'KIRLOSIND',
    'Name': 'Kirloskar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE250A01039'
  },
  {
    'Code': 'KITEX',
    'Name': 'Kitex Garments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE602G01020'
  },
  {
    'Code': 'KKCL',
    'Name': 'Kewal Kiran Clothing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE401H01017'
  },
  {
    'Code': 'KMSUGAR',
    'Name': 'K.M.Sugar Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE157H01023'
  },
  {
    'Code': 'KNRCON',
    'Name': 'KNR Constructions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE634I01029'
  },
  {
    'Code': 'KOHINOOR',
    'Name': 'Kohinoor Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE080B01012'
  },
  {
    'Code': 'KOKUYOCMLN',
    'Name': 'Kokuyo Camlin Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE760A01029'
  },
  {
    'Code': 'KOLTEPATIL',
    'Name': 'Kolte - Patil Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE094I01018'
  },
  {
    'Code': 'KOPRAN',
    'Name': 'Kopran Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE082A01010'
  },
  {
    'Code': 'KOTAKALPHA',
    'Name': 'Kotak Nifty Alpha 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKBANK',
    'Name': 'Kotak Mahindra Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE237A01028'
  },
  {
    'Code': 'KOTAKBKETF',
    'Name': 'Kotak Mahindra Mutual Fund - Kotak Banking ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF174K01F59'
  },
  {
    'Code': 'KOTAKCONS',
    'Name': 'Kotak NIFTY India Consumption ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKGOLD',
    'Name': 'Kotak Gold ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF373I01049'
  },
  {
    'Code': 'KOTAKIT',
    'Name': 'Kotak Nifty IT ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKLOVOL',
    'Name': 'Kotak Nifty 100 Low Volatality 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKMID50',
    'Name': 'Kotak Nifty Midcap 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKMNC',
    'Name': 'Kotak Nifty MNC ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'KOTAKNIFTY',
    'Name': 'Kotak Mahindra Mutual Fund - Kotak Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF174K014P6'
  },
  {
    'Code': 'KOTAKNV20',
    'Name': 'Kotak Mahindra Mutual Fund - Kotak NV 20 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF174K01Z71'
  },
  {
    'Code': 'KOTAKPSUBK',
    'Name': 'Kotak Mahindra Mutual Fund - Kotak PSU Bank ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF373I01023'
  },
  {
    'Code': 'KOTARISUG',
    'Name': 'Kothari Sugars And Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE419A01022'
  },
  {
    'Code': 'KOTHARIPET',
    'Name': 'Kothari Petrochemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE720A01015'
  },
  {
    'Code': 'KOTHARIPRO',
    'Name': 'Kothari Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE823A01017'
  },
  {
    'Code': 'KPIGREEN',
    'Name': 'KPI Green Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE542W01017'
  },
  {
    'Code': 'KPITTECH',
    'Name': 'KPIT Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE04I401011'
  },
  {
    'Code': 'KPRMILL',
    'Name': 'K.P.R. Mill Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE930H01031'
  },
  {
    'Code': 'KRBL',
    'Name': 'KRBL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE001B01026'
  },
  {
    'Code': 'KREBSBIO',
    'Name': 'Krebs Biochemicals and Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE268B01013'
  },
  {
    'Code': 'KRIDHANINF',
    'Name': 'Kridhan Infra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE524L01026'
  },
  {
    'Code': 'KRISHANA',
    'Name': 'Krishana Phoschem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE506W01012'
  },
  {
    'Code': 'KRITI',
    'Name': 'Kriti Industries (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE479D01038'
  },
  {
    'Code': 'KRITIKA',
    'Name': 'Kritika Wires Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00Z501029'
  },
  {
    'Code': 'KRITINUT',
    'Name': 'Kriti Nutrients Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE798K01010'
  },
  {
    'Code': 'KRSNAA',
    'Name': 'Krsnaa Diagnostics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE08LI01020'
  },
  {
    'Code': 'KSB',
    'Name': 'Ksb Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE999A01015'
  },
  {
    'Code': 'KSCL',
    'Name': 'Kaveri Seed Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE455I01029'
  },
  {
    'Code': 'KSERASERA',
    'Name': 'KSS Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE216D01026'
  },
  {
    'Code': 'KSHITIJPOL',
    'Name': 'Kshitij Polyline Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE013801027'
  },
  {
    'Code': 'KSL',
    'Name': 'Kalyani Steels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE907A01026'
  },
  {
    'Code': 'KSOLVES',
    'Name': 'Ksolves India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0D6I01015'
  },
  {
    'Code': 'KTKBANK',
    'Name': 'The Karnataka Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE614B01018'
  },
  {
    'Code': 'KUANTUM',
    'Name': 'Kuantum Papers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE529I01021'
  },
  {
    'Code': 'L&TFH',
    'Name': 'L&T Finance Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE498L01015'
  },
  {
    'Code': 'LAGNAM',
    'Name': 'Lagnam Spintex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE548Z01017'
  },
  {
    'Code': 'LAKPRE',
    'Name': 'Lakshmi Precision Screws Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE651C01018'
  },
  {
    'Code': 'LALPATHLAB',
    'Name': 'Dr. Lal Path Labs Ltd.',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE600L01024'
  },
  {
    'Code': 'LAMBODHARA',
    'Name': 'Lambodhara Textiles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE112F01022'
  },
  {
    'Code': 'LANDMARK',
    'Name': 'Landmark Cars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE559R01029'
  },
  {
    'Code': 'LAOPALA',
    'Name': 'La Opala RG Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE059D01020'
  },
  {
    'Code': 'LASA',
    'Name': 'Lasa Supergenerics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE670X01014'
  },
  {
    'Code': 'LATENTVIEW',
    'Name': 'Latent View Analytics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0I7C01011'
  },
  {
    'Code': 'LAURUSLABS',
    'Name': 'Laurus Labs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE947Q01028'
  },
  {
    'Code': 'LAXMICOT',
    'Name': 'Laxmi Cotspin Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE801V01019'
  },
  {
    'Code': 'LAXMIMACH',
    'Name': 'Lakshmi Machine Works Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE269B01029'
  },
  {
    'Code': 'LEEL',
    'Name': 'LEEL Electricals Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE245C01019'
  },
  {
    'Code': 'LEMONTREE',
    'Name': 'Lemon Tree Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE970X01018'
  },
  {
    'Code': 'LEXUS',
    'Name': 'Lexus Granito (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE500X01013'
  },
  {
    'Code': 'LFIC',
    'Name': 'Lakshmi Finance & Industrial Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE850E01012'
  },
  {
    'Code': 'LGBBROSLTD',
    'Name': 'LG Balakrishnan & Bros Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE337A01034'
  },
  {
    'Code': 'LGBFORGE',
    'Name': 'LGB Forge Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE201J01017'
  },
  {
    'Code': 'LIBAS',
    'Name': 'Libas Consumer Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE908V01012'
  },
  {
    'Code': 'LIBERTSHOE',
    'Name': 'Liberty Shoes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE557B01019'
  },
  {
    'Code': 'LICHSGFIN',
    'Name': 'LIC Housing Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE115A01026'
  },
  {
    'Code': 'LICI',
    'Name': 'Life Insurance Corporation Of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0J1Y01017'
  },
  {
    'Code': 'LICNETFGSC',
    'Name': 'LIC Nomura Mutual Fund - LIC Nomura MF G-Sec Long Term Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF767K01MV5'
  },
  {
    'Code': 'LICNETFN50',
    'Name': 'LIC Mutual Fund - LIC MF Exchange Traded Fund - Nifty 50',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF767K01OS7'
  },
  {
    'Code': 'LICNETFSEN',
    'Name': 'LIC Mutual Fund - LIC MF Exchange Traded Fund - Sensex',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF767K01OT5'
  },
  {
    'Code': 'LICNFNHGP',
    'Name': 'LIC Mutual Fund - LIC MF Exchange Traded Fund - NIFTY 100',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF767K01PC8'
  },
  {
    'Code': 'LIKHITHA',
    'Name': 'Likhitha Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE060901027'
  },
  {
    'Code': 'LINC',
    'Name': 'Linc Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE802B01019'
  },
  {
    'Code': 'LINCOLN',
    'Name': 'Lincoln Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE405C01035'
  },
  {
    'Code': 'LINDEINDIA',
    'Name': 'Linde India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE473A01011'
  },
  {
    'Code': 'LIQUIDBEES',
    'Name': 'Reliance ETF Liquid BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01037'
  },
  {
    'Code': 'LIQUIDETF',
    'Name': 'DSP Blackrock Mutual Fund - Liquid ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'LODHA',
    'Name': 'Macrotech Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE670K01029'
  },
  {
    'Code': 'LOKESHMACH',
    'Name': 'Lokesh Machines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE397H01017'
  },
  {
    'Code': 'LOTUSEYE',
    'Name': 'Lotus Eye Hospital and Institute Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE947I01017'
  },
  {
    'Code': 'LOVABLE',
    'Name': 'Lovable Lingerie Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE597L01014'
  },
  {
    'Code': 'LOYALTEX',
    'Name': 'Loyal Textile Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE970D01010'
  },
  {
    'Code': 'LPDC',
    'Name': 'Landmark Property Development Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE197J01017'
  },
  {
    'Code': 'LSIL',
    'Name': 'Lloyds Steels Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE093R01011'
  },
  {
    'Code': 'LT',
    'Name': 'Larsen & Toubro Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE018A01030'
  },
  {
    'Code': 'LTFH',
    'Name': 'LTFH',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'LTGILTBEES',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Long Term Gilt',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'LTIM',
    'Name': 'LTIMindtree Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE214T01019'
  },
  {
    'Code': 'LTTS',
    'Name': 'L&T Technology Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE010V01017'
  },
  {
    'Code': 'LUMAXIND',
    'Name': 'Lumax Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE162B01018'
  },
  {
    'Code': 'LUMAXTECH',
    'Name': 'Lumax Auto Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE872H01027'
  },
  {
    'Code': 'LUPIN',
    'Name': 'Lupin Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE326A01037'
  },
  {
    'Code': 'LUXIND',
    'Name': 'Lux Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE150G01020'
  },
  {
    'Code': 'LXCHEM',
    'Name': 'Laxmi Organic Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE576O01020'
  },
  {
    'Code': 'LYKALABS',
    'Name': 'Lyka Labs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE933A01014'
  },
  {
    'Code': 'LYPSAGEMS',
    'Name': 'Lypsa Gems & Jewellery Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE142K01011'
  },
  {
    'Code': 'M&M',
    'Name': 'Mahindra & Mahindra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE101A01026'
  },
  {
    'Code': 'M&MFIN',
    'Name': 'Mahindra & Mahindra Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE774D01024'
  },
  {
    'Code': 'MAANALU',
    'Name': 'Maan Aluminium Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE215I01019'
  },
  {
    'Code': 'MACPOWER',
    'Name': 'Macpower CNC Machines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE155Z01011'
  },
  {
    'Code': 'MADHAV',
    'Name': 'Madhav Marbles and Granites Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE925C01016'
  },
  {
    'Code': 'MADHUCON',
    'Name': 'Madhucon Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE378D01032'
  },
  {
    'Code': 'MADRASFERT',
    'Name': 'Madras Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE414A01015'
  },
  {
    'Code': 'MAESGETF',
    'Name': 'Mirae Asset Nifty 100 ESG Sector Leaders ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAFANG',
    'Name': 'Mirae Asset NYSE FANG+ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAFSETF',
    'Name': 'Mirae Asset Nifty Financial Services ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAGADSUGAR',
    'Name': 'Magadh Sugar & Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE347W01011'
  },
  {
    'Code': 'MAGNUM',
    'Name': 'Magnum Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE387I01016'
  },
  {
    'Code': 'MAHABANK',
    'Name': 'Bank of Maharashtra',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE457A01014'
  },
  {
    'Code': 'MAHAPEXLTD',
    'Name': 'Maha Rashtra Apex Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE843B01013'
  },
  {
    'Code': 'MAHASTEEL',
    'Name': 'Mahamaya Steel Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE451L01014'
  },
  {
    'Code': 'MAHEPC',
    'Name': 'Mahindra EPC Irrigation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE215D01010'
  },
  {
    'Code': 'MAHESHWARI',
    'Name': 'Maheshwari Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE263W01010'
  },
  {
    'Code': 'MAHINDCIE',
    'Name': 'Mahindra CIE Automotive Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE536H01010'
  },
  {
    'Code': 'MAHKTECH',
    'Name': 'Mirae Asset Hang Seng TECH ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAHLIFE',
    'Name': 'Mahindra Lifespace Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE813A01018'
  },
  {
    'Code': 'MAHLOG',
    'Name': 'Mahindra Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE766P01016'
  },
  {
    'Code': 'MAHSCOOTER',
    'Name': 'Maharashtra Scooters Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE288A01013'
  },
  {
    'Code': 'MAHSEAMLES',
    'Name': 'Maharashtra Seamless Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE271B01025'
  },
  {
    'Code': 'MAITHANALL',
    'Name': 'Maithan Alloys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE683C01011'
  },
  {
    'Code': 'MALLCOM',
    'Name': 'Mallcom (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE389C01015'
  },
  {
    'Code': 'MALUPAPER',
    'Name': 'Malu Paper Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE383H01017'
  },
  {
    'Code': 'MAM150ETF',
    'Name': 'Mirae Asset Nifty Midcap 150 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAMFGETF',
    'Name': 'Mirae Asset Nifty India Manufacturing ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MAN50ETF',
    'Name': 'Mirae Asset Mutual Fund - Mirae Asset NIFTY 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF769K01EG9'
  },
  {
    'Code': 'MANAKALUCO',
    'Name': 'Manaksia Aluminium Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE859Q01017'
  },
  {
    'Code': 'MANAKCOAT',
    'Name': 'Manaksia Coated Metals & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE830Q01018'
  },
  {
    'Code': 'MANAKSIA',
    'Name': 'Manaksia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE015D01022'
  },
  {
    'Code': 'MANAKSTEEL',
    'Name': 'Manaksia Steels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE824Q01011'
  },
  {
    'Code': 'MANALIPETC',
    'Name': 'Manali Petrochemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE201A01024'
  },
  {
    'Code': 'MANAPPURAM',
    'Name': 'Manappuram Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE522D01027'
  },
  {
    'Code': 'MANGALAM',
    'Name': 'Mangalam Drugs And Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE584F01014'
  },
  {
    'Code': 'MANGCHEFER',
    'Name': 'Mangalore Chemicals & Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE558B01017'
  },
  {
    'Code': 'MANGLMCEM',
    'Name': 'Mangalam Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE347A01017'
  },
  {
    'Code': 'MANINDS',
    'Name': 'Man Industries (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE993A01026'
  },
  {
    'Code': 'MANINFRA',
    'Name': 'Man Infraconstruction Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE949H01023'
  },
  {
    'Code': 'MANKIND',
    'Name': 'Mankind Pharma Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'MANOMAY',
    'Name': 'Manomay Tex India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE784W01015'
  },
  {
    'Code': 'MANORAMA',
    'Name': 'Manorama Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00VM01010'
  },
  {
    'Code': 'MANORG',
    'Name': 'Mangalam Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE370D01013'
  },
  {
    'Code': 'MANPASAND',
    'Name': 'Manpasand Beverages Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE122R01018'
  },
  {
    'Code': 'MANUGRAPH',
    'Name': 'Manugraph India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE867A01022'
  },
  {
    'Code': 'MANXT50',
    'Name': 'Mirae Asset Nifty Next 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MANYAVAR',
    'Name': 'Vedant Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE825V01034'
  },
  {
    'Code': 'MAPMYINDIA',
    'Name': 'C.E. Info Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0BV301023'
  },
  {
    'Code': 'MARALOVER',
    'Name': 'Maral Overseas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE882A01013'
  },
  {
    'Code': 'MARATHON',
    'Name': 'Marathon Nextgen Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE182D01020'
  },
  {
    'Code': 'MARICO',
    'Name': 'Marico Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE196A01026'
  },
  {
    'Code': 'MARINE',
    'Name': 'Marine Electricals (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01JE01028'
  },
  {
    'Code': 'MARKSANS',
    'Name': 'Marksans Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE750C01026'
  },
  {
    'Code': 'MARSHALL',
    'Name': 'Marshall Machines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00SZ01018'
  },
  {
    'Code': 'MARUTI',
    'Name': 'Maruti Suzuki India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE585B01010'
  },
  {
    'Code': 'MASFIN',
    'Name': 'MAS Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE348L01012'
  },
  {
    'Code': 'MASKINVEST',
    'Name': 'Mask Investments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE885F01015'
  },
  {
    'Code': 'MASPTOP50',
    'Name': 'Mirae Asset S&P 500 Top 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MASTEK',
    'Name': 'Mastek Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE759A01021'
  },
  {
    'Code': 'MATRIMONY',
    'Name': 'Matrimony.Com Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE866R01028'
  },
  {
    'Code': 'MAWANASUG',
    'Name': 'Mawana Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE636A01039'
  },
  {
    'Code': 'MAXHEALTH',
    'Name': 'Max Healthcare Institute Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE027H01010'
  },
  {
    'Code': 'MAXIND',
    'Name': 'Max India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CG601016'
  },
  {
    'Code': 'MAXVIL',
    'Name': 'Max Ventures and Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE154U01015'
  },
  {
    'Code': 'MAYURUNIQ',
    'Name': 'Mayur Uniquoters Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE040D01038'
  },
  {
    'Code': 'MAZDA',
    'Name': 'Mazda Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE885E01034'
  },
  {
    'Code': 'MAZDOCK',
    'Name': 'Mazagon Dock Shipbuilders Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE249Z01012'
  },
  {
    'Code': 'MBAPL',
    'Name': 'Madhya Bharat Agro Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE900L01010'
  },
  {
    'Code': 'MBECL',
    'Name': 'Mcnally Bharat Engineering Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE748A01016'
  },
  {
    'Code': 'MBLINFRA',
    'Name': 'MBL Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE912H01013'
  },
  {
    'Code': 'MCDHOLDING',
    'Name': 'McDowell Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE836H01014'
  },
  {
    'Code': 'MCDOWELL-N',
    'Name': 'United Spirits Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE854D01024'
  },
  {
    'Code': 'MCL',
    'Name': 'Madhav Copper Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE813V01022'
  },
  {
    'Code': 'MCLEODRUSS',
    'Name': 'Mcleod Russel India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE942G01012'
  },
  {
    'Code': 'MCX',
    'Name': 'Multi Commodity Exchange of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE745G01035'
  },
  {
    'Code': 'MEDANTA',
    'Name': 'Global Health Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE474Q01031'
  },
  {
    'Code': 'MEDICAMEQ',
    'Name': 'Medicamen Biotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE646B01010'
  },
  {
    'Code': 'MEDICO',
    'Name': 'Medico Remedies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE630Y01024'
  },
  {
    'Code': 'MEDPLUS',
    'Name': 'Medplus Health Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE804L01022'
  },
  {
    'Code': 'MEGASOFT',
    'Name': 'Megasoft Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE933B01012'
  },
  {
    'Code': 'MEGASTAR',
    'Name': 'Megastar Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00EM01016'
  },
  {
    'Code': 'MELSTAR',
    'Name': 'Melstar Information Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE817A01019'
  },
  {
    'Code': 'MENONBE',
    'Name': 'Menon Bearings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE071D01033'
  },
  {
    'Code': 'MEP',
    'Name': 'MEP Infrastructure Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE776I01010'
  },
  {
    'Code': 'MERCATOR',
    'Name': 'Mercator Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE934B01028'
  },
  {
    'Code': 'METALFORGE',
    'Name': 'Metalyst Forgings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE425A01011'
  },
  {
    'Code': 'METKORE',
    'Name': 'Metkore Alloys & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE592I01029'
  },
  {
    'Code': 'METROBRAND',
    'Name': 'Metro Brands Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE317I01021'
  },
  {
    'Code': 'METROPOLIS',
    'Name': 'Metropolis Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE112L01020'
  },
  {
    'Code': 'MFL',
    'Name': 'Meghmani Finechem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE071N01016'
  },
  {
    'Code': 'MFSL',
    'Name': 'Max Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE180A01020'
  },
  {
    'Code': 'MGEL',
    'Name': 'Mangalam Global Enterprise Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0APB01024'
  },
  {
    'Code': 'MGL',
    'Name': 'Mahanagar Gas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE002S01010'
  },
  {
    'Code': 'MHLXMIRU',
    'Name': 'Mahalaxmi Rubtech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE112D01035'
  },
  {
    'Code': 'MHRIL',
    'Name': 'Mahindra Holidays & Resorts India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE998I01010'
  },
  {
    'Code': 'MICEL',
    'Name': 'MIC Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE287C01037'
  },
  {
    'Code': 'MID150BEES',
    'Name': 'MID150BEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MIDHANI',
    'Name': 'Mishra Dhatu Nigam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE099Z01011'
  },
  {
    'Code': 'MINDACORP',
    'Name': 'Minda Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE842C01021'
  },
  {
    'Code': 'MINDSPACE',
    'Name': 'MINDSPACE BUSINESS PARKS REITS UNI',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'MINDSPACE-RR',
    'Name': 'Mindspace Business Parks Reits',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CCU25019'
  },
  {
    'Code': 'MINDTECK',
    'Name': 'Mindteck (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE110B01017'
  },
  {
    'Code': 'MIRCELECTR',
    'Name': 'MIRC Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE831A01028'
  },
  {
    'Code': 'MIRZAINT',
    'Name': 'Mirza International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE771A01026'
  },
  {
    'Code': 'MITCON',
    'Name': 'MITCON Consultancy & Engineering Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE828O01033'
  },
  {
    'Code': 'MITTAL',
    'Name': 'Mittal Life Style Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE997Y01019'
  },
  {
    'Code': 'MMFL',
    'Name': 'MM Forgings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE227C01017'
  },
  {
    'Code': 'MMP',
    'Name': 'MMP Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE511Y01018'
  },
  {
    'Code': 'MMTC',
    'Name': 'MMTC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE123F01029'
  },
  {
    'Code': 'MODIRUBBER',
    'Name': 'Modi Rubber Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE832A01018'
  },
  {
    'Code': 'MODISONLTD',
    'Name': 'MODISON LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE737D01021'
  },
  {
    'Code': 'MOGSEC',
    'Name': 'Motilal Oswal Amc Ltd. - Motilal Oswal Mutual Fund - Motilal Oswal 5 Year G-Sec ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOHEALTH',
    'Name': 'Motilal Oswal S&P BSE Healthcare ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOHITIND',
    'Name': 'Mohit Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE954E01012'
  },
  {
    'Code': 'MOHOTAIND',
    'Name': 'Mohota Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE313D01013'
  },
  {
    'Code': 'MOIL',
    'Name': 'MOIL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE490G01020'
  },
  {
    'Code': 'MOKSH',
    'Name': 'Moksh Ornaments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE514Y01020'
  },
  {
    'Code': 'MOL',
    'Name': 'Meghmani Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CT101020'
  },
  {
    'Code': 'MOLDTECH',
    'Name': 'Mold-Tek Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE835B01035'
  },
  {
    'Code': 'MOLDTKPAC',
    'Name': 'Mold-Tek Packaging Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE893J01029'
  },
  {
    'Code': 'MOLOWVOL',
    'Name': 'Motilal Oswal S&P BSE Low Volatility ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOM100',
    'Name': 'Motilal Oswal Nifty Midcap 100 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOM50',
    'Name': 'Motilal Oswal M50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOMENTUM',
    'Name': 'Aditya Birla Sun Life Nifty 200 Momentum 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MOMOMENTUM',
    'Name': 'Motilal Oswal AMC Ltd. - Motilal Oswal Mutual Fund - Motilal Oswal Nifty 200 Momentum 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MON100',
    'Name': 'Motilal Oswal NASDAQ 100 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF247L01AP3'
  },
  {
    'Code': 'MONARCH',
    'Name': 'Monarch Networth Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE903D01011'
  },
  {
    'Code': 'MONQ50',
    'Name': 'Motilal Oswal Nasdaq Q 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MONTECARLO',
    'Name': 'Monte Carlo Fashions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE950M01013'
  },
  {
    'Code': 'MOQUALITY',
    'Name': 'Motilal Oswal S&P BSE Quality ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'MORARJEE',
    'Name': 'Morarjee Textiles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE161G01027'
  },
  {
    'Code': 'MOREPENLAB',
    'Name': 'Morepen Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE083A01026'
  },
  {
    'Code': 'MOTHERSON',
    'Name': 'Samvardhana Motherson International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE775A01035'
  },
  {
    'Code': 'MOTILALOFS',
    'Name': 'Motilal Oswal Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE338I01027'
  },
  {
    'Code': 'MOTOGENFIN',
    'Name': 'The Motor & General Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE861B01023'
  },
  {
    'Code': 'MPHASIS',
    'Name': 'MphasiS Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE356A01018'
  },
  {
    'Code': 'MPSLTD',
    'Name': 'MPS Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE943D01017'
  },
  {
    'Code': 'MRF',
    'Name': 'MRF Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE883A01011'
  },
  {
    'Code': 'MRO-TEK',
    'Name': 'MRO-TEK Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE398B01018'
  },
  {
    'Code': 'MRPL',
    'Name': 'Mangalore Refinery and Petrochemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE103A01014'
  },
  {
    'Code': 'MSPL',
    'Name': 'MSP Steel & Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE752G01015'
  },
  {
    'Code': 'MSTCLTD',
    'Name': 'Mstc Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE255X01014'
  },
  {
    'Code': 'MSUMI',
    'Name': 'Motherson Sumi Wiring India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0FS801015'
  },
  {
    'Code': 'MTARTECH',
    'Name': 'Mtar Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE864I01014'
  },
  {
    'Code': 'MTEDUCARE',
    'Name': 'MT Educare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE472M01018'
  },
  {
    'Code': 'MTNL',
    'Name': 'Mahanagar Telephone Nigam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE153A01019'
  },
  {
    'Code': 'MUKANDLTD',
    'Name': 'Mukand Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE304A01026'
  },
  {
    'Code': 'MUKTAARTS',
    'Name': 'Mukta Arts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE374B01019'
  },
  {
    'Code': 'MUNJALAU',
    'Name': 'Munjal Auto Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE672B01032'
  },
  {
    'Code': 'MUNJALSHOW',
    'Name': 'Munjal Showa Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE577A01027'
  },
  {
    'Code': 'MURUDCERA',
    'Name': 'Murudeshwar Ceramics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE692B01014'
  },
  {
    'Code': 'MUTHOOTCAP',
    'Name': 'Muthoot Capital Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE296G01013'
  },
  {
    'Code': 'MUTHOOTFIN',
    'Name': 'Muthoot Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE414G01012'
  },
  {
    'Code': 'MVL',
    'Name': 'MVL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE744I01034'
  },
  {
    'Code': 'NACLIND',
    'Name': 'NACL Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE295D01020'
  },
  {
    'Code': 'NAGAFERT',
    'Name': 'Nagarjuna Fertilizers and Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE454M01024'
  },
  {
    'Code': 'NAGREEKCAP',
    'Name': 'Nagreeka Capital & Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE245I01016'
  },
  {
    'Code': 'NAGREEKEXP',
    'Name': 'Nagreeka Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE123B01028'
  },
  {
    'Code': 'NAHARCAP',
    'Name': 'Nahar Capital and Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE049I01012'
  },
  {
    'Code': 'NAHARINDUS',
    'Name': 'Nahar Industrial Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE289A01011'
  },
  {
    'Code': 'NAHARPOLY',
    'Name': 'Nahar Poly Films Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE308A01027'
  },
  {
    'Code': 'NAHARSPING',
    'Name': 'Nahar Spinning Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE290A01027'
  },
  {
    'Code': 'NAM-INDIA',
    'Name': 'Nippon Life India Asset Management Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE298J01013'
  },
  {
    'Code': 'NARMADA',
    'Name': 'Narmada Agrobase Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE117Z01011'
  },
  {
    'Code': 'NATCOPHARM',
    'Name': 'Natco Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE987B01026'
  },
  {
    'Code': 'NATHBIOGEN',
    'Name': 'Nath Bio-Genes (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE448G01010'
  },
  {
    'Code': 'NATIONALUM',
    'Name': 'National Aluminium Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE139A01034'
  },
  {
    'Code': 'NAUKRI',
    'Name': 'Info Edge (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE663F01024'
  },
  {
    'Code': 'NAVA',
    'Name': 'Nava Bharat Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE725A01022'
  },
  {
    'Code': 'NAVINFLUOR',
    'Name': 'Navin Fluorine International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE048G01026'
  },
  {
    'Code': 'NAVKARCORP',
    'Name': 'Navkar Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278M01019'
  },
  {
    'Code': 'NAVNETEDUL',
    'Name': 'Navneet Education Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE060A01024'
  },
  {
    'Code': 'NAZARA',
    'Name': 'Nazara Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE418L01021'
  },
  {
    'Code': 'NBCC',
    'Name': 'NBCC (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE095N01031'
  },
  {
    'Code': 'NBIFIN',
    'Name': 'N. B. I. Industrial Finance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE365I01020'
  },
  {
    'Code': 'NCC',
    'Name': 'NCC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE868B01028'
  },
  {
    'Code': 'NCLIND',
    'Name': 'NCL Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE732C01016'
  },
  {
    'Code': 'NDGL',
    'Name': 'Naga Dhunseri Group Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE756C01015'
  },
  {
    'Code': 'NDL',
    'Name': 'Nandan Denim Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE875G01030'
  },
  {
    'Code': 'NDRAUTO',
    'Name': 'Ndr Auto Components Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE07OG01012'
  },
  {
    'Code': 'NDTV',
    'Name': 'New Delhi Television Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE155G01029'
  },
  {
    'Code': 'NECCLTD',
    'Name': 'North Eastern Carrying Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE553C01016'
  },
  {
    'Code': 'NECLIFE',
    'Name': 'Nectar Lifesciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE023H01027'
  },
  {
    'Code': 'NELCAST',
    'Name': 'Nelcast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE189I01024'
  },
  {
    'Code': 'NELCO',
    'Name': 'NELCO Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE045B01015'
  },
  {
    'Code': 'NEOGEN',
    'Name': 'Neogen Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE136S01016'
  },
  {
    'Code': 'NESCO',
    'Name': 'Nesco Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE317F01035'
  },
  {
    'Code': 'NESTLEIND',
    'Name': 'Nestle India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE239A01016'
  },
  {
    'Code': 'NETF',
    'Name': 'Tata Mutual Fund - Tata Nifty Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NETFCONSUM',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Consumption',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NETFDIVOPP',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Dividend Opportunities',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NETFLTGILT',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Long Term Gilt',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NETFNIF100',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Nifty 100',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NETWORK18',
    'Name': 'Network18 Media & Investments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE870H01013'
  },
  {
    'Code': 'NEULANDLAB',
    'Name': 'Neuland Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE794A01010'
  },
  {
    'Code': 'NEWGEN',
    'Name': 'Newgen Software Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE619B01017'
  },
  {
    'Code': 'NEXTMEDIA',
    'Name': 'Next Mediaworks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE747B01016'
  },
  {
    'Code': 'NFL',
    'Name': 'National Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE870D01012'
  },
  {
    'Code': 'NGIL',
    'Name': 'Nakoda Group of Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE236Y01012'
  },
  {
    'Code': 'NGLFINE',
    'Name': 'NGL Fine-Chem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE887E01022'
  },
  {
    'Code': 'NH',
    'Name': 'Narayana Hrudayalaya Ltd.',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE410P01011'
  },
  {
    'Code': 'NHPC',
    'Name': 'NHPC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE848E01016'
  },
  {
    'Code': 'NIACL',
    'Name': 'The New India Assurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE470Y01017'
  },
  {
    'Code': 'NIBL',
    'Name': 'NRB Industrial Bearings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE047O01014'
  },
  {
    'Code': 'NIF100BEES',
    'Name': 'NIF100BEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NIFTYBEES',
    'Name': 'Nippon India Mutual Fund - Nippon India ETF Nifty BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01011'
  },
  {
    'Code': 'NIFTYQLITY',
    'Name': 'Aditya Birla Sun Life Nifty 200 Quality 30 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NIITLTD',
    'Name': 'NIIT Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE161A01038'
  },
  {
    'Code': 'NILAINFRA',
    'Name': 'Nila Infrastructures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE937C01029'
  },
  {
    'Code': 'NILASPACES',
    'Name': 'Nila Spaces Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00S901012'
  },
  {
    'Code': 'NILKAMAL',
    'Name': 'Nilkamal Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE310A01015'
  },
  {
    'Code': 'NINSYS',
    'Name': 'NINtec Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE395U01014'
  },
  {
    'Code': 'NIPPOBATRY',
    'Name': 'Indo-National Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE567A01028'
  },
  {
    'Code': 'NIRAJ',
    'Name': 'Niraj Cement Structurals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE368I01016'
  },
  {
    'Code': 'NITCO',
    'Name': 'Nitco Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE858F01012'
  },
  {
    'Code': 'NITINFIRE',
    'Name': 'Nitin Fire Protection Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE489H01020'
  },
  {
    'Code': 'NITINSPIN',
    'Name': 'Nitin Spinners Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE229H01012'
  },
  {
    'Code': 'NITIRAJ',
    'Name': 'Nitiraj Engineers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE439T01012'
  },
  {
    'Code': 'NKIND',
    'Name': 'NK Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE542C01019'
  },
  {
    'Code': 'NLCINDIA',
    'Name': 'NLC India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE589A01014'
  },
  {
    'Code': 'NMDC',
    'Name': 'NMDC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE584A01023'
  },
  {
    'Code': 'NOCIL',
    'Name': 'NOCIL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE163A01018'
  },
  {
    'Code': 'NOIDATOLL',
    'Name': 'Noida Toll Bridge Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE781B01015'
  },
  {
    'Code': 'NORBTEAEXP',
    'Name': 'Norben Tea & Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE369C01017'
  },
  {
    'Code': 'NOVARTIND',
    'Name': 'Novartis India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE234A01025'
  },
  {
    'Code': 'NPBET',
    'Name': 'Tata Asset Management Limited - Tata Mutual Fund - Tata Nifty Private Bank Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NRAIL',
    'Name': 'N R Agarwal Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE740D01017'
  },
  {
    'Code': 'NRBBEARING',
    'Name': 'NRB Bearing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE349A01021'
  },
  {
    'Code': 'NRL',
    'Name': 'Nupur Recyclers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0JM501013'
  },
  {
    'Code': 'NSIL',
    'Name': 'Nalwa Sons Investments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE023A01030'
  },
  {
    'Code': 'NSLNISP',
    'Name': 'NMDC Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0NNS01018'
  },
  {
    'Code': 'NTL',
    'Name': 'Neueon Towers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE333I01036'
  },
  {
    'Code': 'NTPC',
    'Name': 'NTPC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE733E01010'
  },
  {
    'Code': 'NUCLEUS',
    'Name': 'Nucleus Software Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE096B01018'
  },
  {
    'Code': 'NURECA',
    'Name': 'Nureca Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0DSF01015'
  },
  {
    'Code': 'NUVOCO',
    'Name': 'Nuvoco Vistas Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE118D01016'
  },
  {
    'Code': 'NV20BEES',
    'Name': 'NV20BEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'NXTDIGITAL',
    'Name': 'NXTDIGITAL LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE353A01023'
  },
  {
    'Code': 'NYKAA',
    'Name': 'FSN E-Commerce Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE388Y01029'
  },
  {
    'Code': 'OAL',
    'Name': 'Oriental Aromatics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE959C01023'
  },
  {
    'Code': 'OBCL',
    'Name': 'Orissa Bengal Carrier Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE426Z01016'
  },
  {
    'Code': 'OBEROIRLTY',
    'Name': 'Oberoi Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE093I01010'
  },
  {
    'Code': 'OCCL',
    'Name': 'Oriental Carbon & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE321D01016'
  },
  {
    'Code': 'OFSS',
    'Name': 'Oracle Financial Services Software Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE881D01027'
  },
  {
    'Code': 'OIL',
    'Name': 'Oil India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE274J01014'
  },
  {
    'Code': 'OILCOUNTUB',
    'Name': 'Oil Country Tubular Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE591A01010'
  },
  {
    'Code': 'OISL',
    'Name': 'OCL Iron and Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE196J01019'
  },
  {
    'Code': 'OLECTRA',
    'Name': 'Olectra Greentech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE260D01016'
  },
  {
    'Code': 'OMAXAUTO',
    'Name': 'Omax Autos Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE090B01011'
  },
  {
    'Code': 'OMAXE',
    'Name': 'Omaxe Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE800H01010'
  },
  {
    'Code': 'OMINFRAL',
    'Name': 'OM INFRA LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE239D01028'
  },
  {
    'Code': 'OMKARCHEM',
    'Name': 'Omkar Speciality Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE474L01016'
  },
  {
    'Code': 'ONELIFECAP',
    'Name': 'Onelife Capital Advisors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE912L01015'
  },
  {
    'Code': 'ONEPOINT',
    'Name': 'One Point One Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE840Y01029'
  },
  {
    'Code': 'ONGC',
    'Name': 'Oil & Natural Gas Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE213A01029'
  },
  {
    'Code': 'ONMOBILE',
    'Name': 'OnMobile Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE809I01019'
  },
  {
    'Code': 'ONWARDTEC',
    'Name': 'Onward Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE229A01017'
  },
  {
    'Code': 'OPTIEMUS',
    'Name': 'Optiemus Infracom Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE350C01017'
  },
  {
    'Code': 'OPTOCIRCUI',
    'Name': 'Opto Circuits (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE808B01016'
  },
  {
    'Code': 'ORBTEXP',
    'Name': 'Orbit Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE231G01010'
  },
  {
    'Code': 'ORCHPHARMA',
    'Name': 'Orchid Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE191A01027'
  },
  {
    'Code': 'ORICONENT',
    'Name': 'Oricon Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE730A01022'
  },
  {
    'Code': 'ORIENTABRA',
    'Name': 'Orient Abrasives Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE569C01020'
  },
  {
    'Code': 'ORIENTALTL',
    'Name': 'Oriental Trimex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE998H01012'
  },
  {
    'Code': 'ORIENTBELL',
    'Name': 'Orient Bell Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE607D01018'
  },
  {
    'Code': 'ORIENTCEM',
    'Name': 'Orient Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE876N01018'
  },
  {
    'Code': 'ORIENTELEC',
    'Name': 'Orient Electric Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE142Z01019'
  },
  {
    'Code': 'ORIENTHOT',
    'Name': 'Oriental Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE750A01020'
  },
  {
    'Code': 'ORIENTLTD',
    'Name': 'Orient Press Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE609C01024'
  },
  {
    'Code': 'ORIENTPPR',
    'Name': 'Orient Paper & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE592A01026'
  },
  {
    'Code': 'ORISSAMINE',
    'Name': 'The Orissa Minerals Development Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE725E01024'
  },
  {
    'Code': 'ORTEL',
    'Name': 'Ortel Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE849L01019'
  },
  {
    'Code': 'ORTINLAB',
    'Name': 'Ortin Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE749B01020'
  },
  {
    'Code': 'OSIAHYPER',
    'Name': 'Osia Hyper Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE06IR01021'
  },
  {
    'Code': 'OSWALAGRO',
    'Name': 'Oswal Agro Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE142A01012'
  },
  {
    'Code': 'OSWALSEEDS',
    'Name': 'ShreeOswal Seeds And Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00IK01011'
  },
  {
    'Code': 'PAGEIND',
    'Name': 'Page Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE761H01022'
  },
  {
    'Code': 'PAISALO',
    'Name': 'Paisalo Digital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE420C01059'
  },
  {
    'Code': 'PALASHSECU',
    'Name': 'Palash Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE471W01019'
  },
  {
    'Code': 'PALREDTEC',
    'Name': 'Palred Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE218G01033'
  },
  {
    'Code': 'PANACEABIO',
    'Name': 'Panacea Biotec Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE922B01023'
  },
  {
    'Code': 'PANACHE',
    'Name': 'Panache Digilife Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE895W01019'
  },
  {
    'Code': 'PANAMAPET',
    'Name': 'Panama Petrochem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE305C01029'
  },
  {
    'Code': 'PANSARI',
    'Name': 'Pansari Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE697V01011'
  },
  {
    'Code': 'PAR',
    'Name': 'Par Drugs And Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE04LG01015'
  },
  {
    'Code': 'PARACABLES',
    'Name': 'Paramount Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE074B01023'
  },
  {
    'Code': 'PARADEEP',
    'Name': 'Paradeep Phosphates Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE088F01024'
  },
  {
    'Code': 'PARAGMILK',
    'Name': 'Parag Milk Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE883N01014'
  },
  {
    'Code': 'PARAS',
    'Name': 'Paras Defence and Space Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE045601015'
  },
  {
    'Code': 'PARSVNATH',
    'Name': 'Parsvnath Developers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE561H01026'
  },
  {
    'Code': 'PASUPTAC',
    'Name': 'Pasupati Acrylon Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE818B01023'
  },
  {
    'Code': 'PATANJALI',
    'Name': 'Patanjali Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE619A01035'
  },
  {
    'Code': 'PATELENG',
    'Name': 'Patel Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE244B01030'
  },
  {
    'Code': 'PATINTLOG',
    'Name': 'Patel Integrated Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE529D01014'
  },
  {
    'Code': 'PAYTM',
    'Name': 'One 97 Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE982J01020'
  },
  {
    'Code': 'PCBL',
    'Name': 'PCBL LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE602A01031'
  },
  {
    'Code': 'PCJEWELLER',
    'Name': 'PC Jeweller Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE785M01013'
  },
  {
    'Code': 'PDMJEPAPER',
    'Name': 'Pudumjee Paper Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE865T01018'
  },
  {
    'Code': 'PDPL',
    'Name': 'Parenteral Drugs (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE904D01019'
  },
  {
    'Code': 'PDSL',
    'Name': 'PDS Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE111Q01021'
  },
  {
    'Code': 'PEARLPOLY',
    'Name': 'Pearl Polymers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE844A01013'
  },
  {
    'Code': 'PEL',
    'Name': 'Piramal Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE140A01024'
  },
  {
    'Code': 'PENIND',
    'Name': 'Pennar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE932A01024'
  },
  {
    'Code': 'PENINLAND',
    'Name': 'Peninsula Land Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE138A01028'
  },
  {
    'Code': 'PERSISTENT',
    'Name': 'Persistent Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE262H01013'
  },
  {
    'Code': 'PETRONET',
    'Name': 'Petronet LNG Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE347G01014'
  },
  {
    'Code': 'PFC',
    'Name': 'Power Finance Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE134E01011'
  },
  {
    'Code': 'PFIZER',
    'Name': 'Pfizer Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE182A01018'
  },
  {
    'Code': 'PFOCUS',
    'Name': 'Prime Focus Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE367G01038'
  },
  {
    'Code': 'PFS',
    'Name': 'PTC India Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE560K01014'
  },
  {
    'Code': 'PGEL',
    'Name': 'PG Electroplast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE457L01011'
  },
  {
    'Code': 'PGHH',
    'Name': 'Procter & Gamble Hygiene and Health Care Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE179A01014'
  },
  {
    'Code': 'PGHL',
    'Name': 'Procter & Gamble Health Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE199A01012'
  },
  {
    'Code': 'PGIL',
    'Name': 'Pearl Global Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE940H01014'
  },
  {
    'Code': 'PGINVIT-IV',
    'Name': 'POWERGRID Infrastructure Investment Trust Unit',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0GGX23010'
  },
  {
    'Code': 'PHARMABEES',
    'Name': 'PHARMABEES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'PHOENIXLTD',
    'Name': 'The Phoenix Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE211B01039'
  },
  {
    'Code': 'PIDILITIND',
    'Name': 'Pidilite Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE318A01026'
  },
  {
    'Code': 'PIIND',
    'Name': 'PI Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE603J01030'
  },
  {
    'Code': 'PILANIINVS',
    'Name': 'Pilani Investment and Industries Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE417C01014'
  },
  {
    'Code': 'PILITA',
    'Name': 'PIL ITALICA LIFESTYLE LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE600A01035'
  },
  {
    'Code': 'PIONEEREMB',
    'Name': 'Pioneer Embroideries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE156C01018'
  },
  {
    'Code': 'PITTIENG',
    'Name': 'Pitti Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE450D01021'
  },
  {
    'Code': 'PIXTRANS',
    'Name': 'Pix Transmissions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE751B01018'
  },
  {
    'Code': 'PKTEA',
    'Name': 'The Peria Karamalai Tea & Produce Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE431F01018'
  },
  {
    'Code': 'PLASTIBLEN',
    'Name': 'Plastiblends India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE083C01022'
  },
  {
    'Code': 'PNB',
    'Name': 'Punjab National Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE160A01022'
  },
  {
    'Code': 'PNBGILTS',
    'Name': 'PNB Gilts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE859A01011'
  },
  {
    'Code': 'PNBHOUSING',
    'Name': 'PNB Housing Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE572E01012'
  },
  {
    'Code': 'PNC',
    'Name': 'Pritish Nandy Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE392B01011'
  },
  {
    'Code': 'PNCINFRA',
    'Name': 'PNC Infratech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE195J01029'
  },
  {
    'Code': 'POCL',
    'Name': 'Pondy Oxides & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE063E01046'
  },
  {
    'Code': 'PODDARHOUS',
    'Name': 'Poddar Housing and Development Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE888B01018'
  },
  {
    'Code': 'PODDARMENT',
    'Name': 'Poddar Pigments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE371C01013'
  },
  {
    'Code': 'POKARNA',
    'Name': 'Pokarna Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE637C01025'
  },
  {
    'Code': 'POLICYBZR',
    'Name': 'PB Fintech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE417T01026'
  },
  {
    'Code': 'POLYCAB',
    'Name': 'Polycab India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE455K01017'
  },
  {
    'Code': 'POLYMED',
    'Name': 'Poly Medicure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE205C01021'
  },
  {
    'Code': 'POLYPLEX',
    'Name': 'Polyplex Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE633B01018'
  },
  {
    'Code': 'PONNIERODE',
    'Name': 'Ponni Sugars (Erode) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE838E01017'
  },
  {
    'Code': 'POONAWALLA',
    'Name': 'Poonawalla Fincorp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE511C01022'
  },
  {
    'Code': 'POWERGRID',
    'Name': 'Power Grid Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE752E01010'
  },
  {
    'Code': 'POWERINDIA',
    'Name': 'Hitachi Energy India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE07Y701011'
  },
  {
    'Code': 'POWERMECH',
    'Name': 'Power Mech Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE211R01019'
  },
  {
    'Code': 'PPAP',
    'Name': 'PPAP Automotive Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE095I01015'
  },
  {
    'Code': 'PPL',
    'Name': 'Prakash Pipes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050001010'
  },
  {
    'Code': 'PPLPHARMA',
    'Name': 'Piramal Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0DK501011'
  },
  {
    'Code': 'PRAENG',
    'Name': 'Prajay Engineers Syndicate Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE505C01016'
  },
  {
    'Code': 'PRAJIND',
    'Name': 'Praj Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE074A01025'
  },
  {
    'Code': 'PRAKASH',
    'Name': 'Prakash Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE603A01013'
  },
  {
    'Code': 'PRAKASHSTL',
    'Name': 'Prakash Steelage Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE696K01024'
  },
  {
    'Code': 'PRAXIS',
    'Name': 'Praxis Home Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE546Y01022'
  },
  {
    'Code': 'PRECAM',
    'Name': 'Precision Camshafts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE484I01029'
  },
  {
    'Code': 'PRECOT',
    'Name': 'Precot Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE283A01014'
  },
  {
    'Code': 'PRECWIRE',
    'Name': 'Precision Wires India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE372C01037'
  },
  {
    'Code': 'PREMEXPLN',
    'Name': 'Premier Explosives Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE863B01011'
  },
  {
    'Code': 'PREMIER',
    'Name': 'Premier Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE342A01018'
  },
  {
    'Code': 'PREMIERPOL',
    'Name': 'Premier Polyfilm Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE309M01012'
  },
  {
    'Code': 'PRESSMN',
    'Name': 'Pressman Advertising Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE980A01023'
  },
  {
    'Code': 'PRESTIGE',
    'Name': 'Prestige Estates Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE811K01011'
  },
  {
    'Code': 'PRICOLLTD',
    'Name': 'Pricol Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE726V01018'
  },
  {
    'Code': 'PRIMESECU',
    'Name': 'Prime Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE032B01021'
  },
  {
    'Code': 'PRINCEPIPE',
    'Name': 'Prince Pipes And Fittings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE689W01016'
  },
  {
    'Code': 'PRITI',
    'Name': 'Priti International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE974Z01015'
  },
  {
    'Code': 'PRITIKAUTO',
    'Name': 'Pritika Auto Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583R01029'
  },
  {
    'Code': 'PRIVISCL',
    'Name': 'Privi Speciality Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE959A01019'
  },
  {
    'Code': 'PROZONINTU',
    'Name': 'Prozone Intu Properties Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE195N01013'
  },
  {
    'Code': 'PRSMJOHNSN',
    'Name': 'Prism Johnson Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE010A01011'
  },
  {
    'Code': 'PRUDENT',
    'Name': 'Prudent Corporate Advisory Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00F201020'
  },
  {
    'Code': 'PSB',
    'Name': 'Punjab & Sind Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE608A01012'
  },
  {
    'Code': 'PSPPROJECT',
    'Name': 'PSP Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE488V01015'
  },
  {
    'Code': 'PSUBNKBEES',
    'Name': 'Nippon Mutual Funds - Nippon ETF PSU Bank BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01110'
  },
  {
    'Code': 'PTC',
    'Name': 'PTC India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE877F01012'
  },
  {
    'Code': 'PTL',
    'Name': 'PTL Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE034D01049'
  },
  {
    'Code': 'PUNJABCHEM',
    'Name': 'Punjab Chemicals & Crop Protection Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE277B01014'
  },
  {
    'Code': 'PUNJLLOYD',
    'Name': 'Punj Lloyd Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE701B01021'
  },
  {
    'Code': 'PURVA',
    'Name': 'Puravankara Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE323I01011'
  },
  {
    'Code': 'PVR',
    'Name': 'PVR Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE191H01014'
  },
  {
    'Code': 'QGOLDHALF',
    'Name': 'Quantum Gold Exchange Traded Scheme',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF082J01010'
  },
  {
    'Code': 'QNIFTY',
    'Name': 'Quantum Mutual Fund - Quantum Nifty ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF082J01028'
  },
  {
    'Code': 'QUESS',
    'Name': 'Quess Corp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE615P01015'
  },
  {
    'Code': 'QUICKHEAL',
    'Name': 'Quick Heal Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE306L01010'
  },
  {
    'Code': 'QUINTEGRA',
    'Name': 'Quintegra Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE033B01011'
  },
  {
    'Code': 'RADAAN',
    'Name': 'Radaan Mediaworks India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE874F01027'
  },
  {
    'Code': 'RADHIKAJWE',
    'Name': 'Radhika Jeweltech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583V01013'
  },
  {
    'Code': 'RADIANTCMS',
    'Name': 'Radiant Cash Management Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE855R01021'
  },
  {
    'Code': 'RADICO',
    'Name': 'Radico Khaitan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE944F01028'
  },
  {
    'Code': 'RADIOCITY',
    'Name': 'Music Broadcast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE919I01024'
  },
  {
    'Code': 'RAILTEL',
    'Name': 'Railtel Corporation Of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0DD101019'
  },
  {
    'Code': 'RAIN',
    'Name': 'Rain Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE855B01025'
  },
  {
    'Code': 'RAINBOW',
    'Name': 'Rainbow Childrens Medicare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE961O01016'
  },
  {
    'Code': 'RAINBOWPAP',
    'Name': 'Rainbow Papers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE028D01025'
  },
  {
    'Code': 'RAJESHEXPO',
    'Name': 'Rajesh Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE343B01030'
  },
  {
    'Code': 'RAJMET',
    'Name': 'Rajnandini Metal Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00KV01022'
  },
  {
    'Code': 'RAJRATAN',
    'Name': 'Rajratan Global Wire Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE451D01029'
  },
  {
    'Code': 'RAJRILTD',
    'Name': 'Raj Rayon Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE533D01032'
  },
  {
    'Code': 'RAJSREESUG',
    'Name': 'Rajshree Sugars & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE562B01019'
  },
  {
    'Code': 'RAJTV',
    'Name': 'Raj Television Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE952H01027'
  },
  {
    'Code': 'RAJVIR',
    'Name': 'Rajvir Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE011H01014'
  },
  {
    'Code': 'RALLIS',
    'Name': 'Rallis India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE613A01020'
  },
  {
    'Code': 'RAMANEWS',
    'Name': 'Shree Rama Newsprint Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278B01020'
  },
  {
    'Code': 'RAMAPHO',
    'Name': 'Rama Phosphates Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE809A01024'
  },
  {
    'Code': 'RAMASTEEL',
    'Name': 'Rama Steel Tubes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE230R01035'
  },
  {
    'Code': 'RAMCOCEM',
    'Name': 'The Ramco Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE331A01037'
  },
  {
    'Code': 'RAMCOIND',
    'Name': 'Ramco Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE614A01028'
  },
  {
    'Code': 'RAMCOSYS',
    'Name': 'Ramco Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE246B01019'
  },
  {
    'Code': 'RAMKY',
    'Name': 'Ramky Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE874I01013'
  },
  {
    'Code': 'RAMRAT',
    'Name': 'Ram Ratna Wires Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE207E01023'
  },
  {
    'Code': 'RANASUG',
    'Name': 'Rana Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE625B01014'
  },
  {
    'Code': 'RANEENGINE',
    'Name': 'Rane Engine Valve Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE222J01013'
  },
  {
    'Code': 'RANEHOLDIN',
    'Name': 'Rane Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE384A01010'
  },
  {
    'Code': 'RATEGAIN',
    'Name': 'Rategain Travel Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0CLI01024'
  },
  {
    'Code': 'RATNAMANI',
    'Name': 'Ratnamani Metals & Tubes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE703B01027'
  },
  {
    'Code': 'RAYMOND',
    'Name': 'Raymond Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE301A01014'
  },
  {
    'Code': 'RBA',
    'Name': 'Restaurant Brands Asia Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE07T201019'
  },
  {
    'Code': 'RBL',
    'Name': 'Rane Brake Lining Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE244J01017'
  },
  {
    'Code': 'RBLBANK',
    'Name': 'RBL Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE976G01028'
  },
  {
    'Code': 'RCF',
    'Name': 'Rashtriya Chemicals and Fertilizers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE027A01015'
  },
  {
    'Code': 'RCOM',
    'Name': 'Reliance Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE330H01018'
  },
  {
    'Code': 'RECLTD',
    'Name': 'REC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE020B01018'
  },
  {
    'Code': 'REDINGTON',
    'Name': 'Redington Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE891D01026'
  },
  {
    'Code': 'REFEX',
    'Name': 'Refex Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE056I01017'
  },
  {
    'Code': 'REGENCERAM',
    'Name': 'Regency Ceramics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE277C01012'
  },
  {
    'Code': 'RELAXO',
    'Name': 'Relaxo Footwears Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE131B01039'
  },
  {
    'Code': 'RELCAPITAL',
    'Name': 'Reliance Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE013A01015'
  },
  {
    'Code': 'RELCHEMQ',
    'Name': 'Reliance Chemotex Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE750D01016'
  },
  {
    'Code': 'RELIANCE',
    'Name': 'Reliance Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE002A01018'
  },
  {
    'Code': 'RELIGARE',
    'Name': 'Religare Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE621H01010'
  },
  {
    'Code': 'RELINFRA',
    'Name': 'Reliance Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE036A01016'
  },
  {
    'Code': 'REMSONSIND',
    'Name': 'Remsons Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE474C01015'
  },
  {
    'Code': 'RENUKA',
    'Name': 'Shree Renuka Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE087H01022'
  },
  {
    'Code': 'REPCOHOME',
    'Name': 'Repco Home Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE612J01015'
  },
  {
    'Code': 'REPL',
    'Name': 'Rudrabhishek Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE364Z01019'
  },
  {
    'Code': 'REPRO',
    'Name': 'Repro India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE461B01014'
  },
  {
    'Code': 'RESPONIND',
    'Name': 'Responsive Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE688D01026'
  },
  {
    'Code': 'REVATHI',
    'Name': 'Revathi Equipment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE617A01013'
  },
  {
    'Code': 'RGL',
    'Name': 'Renaissance Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE722H01024'
  },
  {
    'Code': 'RHFL',
    'Name': 'Reliance Home Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE217K01011'
  },
  {
    'Code': 'RHIM',
    'Name': 'RHI MAGNESITA INDIA LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE743M01012'
  },
  {
    'Code': 'RICOAUTO',
    'Name': 'Rico Auto Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE209B01025'
  },
  {
    'Code': 'RIIL',
    'Name': 'Reliance Industrial Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE046A01015'
  },
  {
    'Code': 'RITCO',
    'Name': 'Ritco Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01EG01016'
  },
  {
    'Code': 'RITES',
    'Name': 'RITES Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE320J01015'
  },
  {
    'Code': 'RKDL',
    'Name': 'Ravi Kumar Distilleries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE722J01012'
  },
  {
    'Code': 'RKEC',
    'Name': 'RKEC Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE786W01010'
  },
  {
    'Code': 'RKFORGE',
    'Name': 'Ramkrishna Forgings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE399G01023'
  },
  {
    'Code': 'RMCL',
    'Name': 'Radha Madhav Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE172H01014'
  },
  {
    'Code': 'RML',
    'Name': 'Rane (Madras) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050H01012'
  },
  {
    'Code': 'RNAVAL',
    'Name': 'Reliance Naval and Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE542F01012'
  },
  {
    'Code': 'ROHLTD',
    'Name': 'Royal Orchid Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE283H01019'
  },
  {
    'Code': 'ROLEXRINGS',
    'Name': 'Rolex Rings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE645S01016'
  },
  {
    'Code': 'ROLLT',
    'Name': 'Rollatainers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE927A01040'
  },
  {
    'Code': 'ROLTA',
    'Name': 'Rolta India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE293A01013'
  },
  {
    'Code': 'ROML',
    'Name': 'Raj Oil Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE294G01026'
  },
  {
    'Code': 'ROSSARI',
    'Name': 'Rossari Biotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02A801020'
  },
  {
    'Code': 'ROSSELLIND',
    'Name': 'Rossell India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE847C01020'
  },
  {
    'Code': 'ROTO',
    'Name': 'Roto Pumps Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE535D01029'
  },
  {
    'Code': 'ROUTE',
    'Name': 'ROUTE MOBILE LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE450U01017'
  },
  {
    'Code': 'RPGLIFE',
    'Name': 'RPG Life Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE105J01010'
  },
  {
    'Code': 'RPOWER',
    'Name': 'Reliance Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE614G01033'
  },
  {
    'Code': 'RPPINFRA',
    'Name': 'R.P.P. Infra Projects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE324L01013'
  },
  {
    'Code': 'RPPL',
    'Name': 'Rajshree Polypack Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE760W01015'
  },
  {
    'Code': 'RPSGVENT',
    'Name': 'RPSG VENTURES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE425Y01011'
  },
  {
    'Code': 'RSSOFTWARE',
    'Name': 'R. S. Software (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE165B01029'
  },
  {
    'Code': 'RSWM',
    'Name': 'RSWM Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE611A01016'
  },
  {
    'Code': 'RSYSTEMS',
    'Name': 'R Systems International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE411H01032'
  },
  {
    'Code': 'RTNINDIA',
    'Name': 'RattanIndia Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE834M01019'
  },
  {
    'Code': 'RTNPOWER',
    'Name': 'RattanIndia Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE399K01017'
  },
  {
    'Code': 'RUBYMILLS',
    'Name': 'The Ruby Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE301D01026'
  },
  {
    'Code': 'RUCHINFRA',
    'Name': 'Ruchi Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE413B01023'
  },
  {
    'Code': 'RUCHIRA',
    'Name': 'Ruchira Papers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE803H01014'
  },
  {
    'Code': 'RUPA',
    'Name': 'Rupa & Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE895B01021'
  },
  {
    'Code': 'RUSHIL',
    'Name': 'Rushil Decor Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE573K01017'
  },
  {
    'Code': 'RUSTOMJEE',
    'Name': 'Keystone Realtors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE263M01029'
  },
  {
    'Code': 'RVHL',
    'Name': 'Ravinder Heights Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE09E501017'
  },
  {
    'Code': 'RVNL',
    'Name': 'Rail Vikas Nigam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE415G01027'
  },
  {
    'Code': 'S&SPOWER',
    'Name': 'S&S Power Switchgears Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE902B01017'
  },
  {
    'Code': 'SABEVENTS',
    'Name': 'Sab Events & Governance Now Media Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE860T01019'
  },
  {
    'Code': 'SABTN',
    'Name': 'Sri Adhikari Brothers Television Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE416A01036'
  },
  {
    'Code': 'SADBHAV',
    'Name': 'Sadbhav Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE226H01026'
  },
  {
    'Code': 'SADBHIN',
    'Name': 'Sadbhav Infrastructure Project Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE764L01010'
  },
  {
    'Code': 'SAFARI',
    'Name': 'Safari Industries (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE429E01023'
  },
  {
    'Code': 'SAGARDEEP',
    'Name': 'Sagardeep Alloys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE976T01013'
  },
  {
    'Code': 'SAGCEM',
    'Name': 'Sagar Cements Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE229C01021'
  },
  {
    'Code': 'SAH',
    'Name': 'Sah Polymers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE035801013'
  },
  {
    'Code': 'SAIL',
    'Name': 'Steel Authority of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE114A01011'
  },
  {
    'Code': 'SAKAR',
    'Name': 'Sakar Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE732S01012'
  },
  {
    'Code': 'SAKHTISUG',
    'Name': 'Sakthi Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE623A01011'
  },
  {
    'Code': 'SAKSOFT',
    'Name': 'Saksoft Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE667G01023'
  },
  {
    'Code': 'SAKUMA',
    'Name': 'Sakuma Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE190H01024'
  },
  {
    'Code': 'SALASAR',
    'Name': 'Salasar Techno Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE170V01027'
  },
  {
    'Code': 'SALONA',
    'Name': 'Salona Cotspin Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE498E01010'
  },
  {
    'Code': 'SALSTEEL',
    'Name': 'S.A.L. Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE658G01014'
  },
  {
    'Code': 'SALZERELEC',
    'Name': 'Salzer Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE457F01013'
  },
  {
    'Code': 'SAMBHAAV',
    'Name': 'Sambhaav Media Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE699B01027'
  },
  {
    'Code': 'SANCO',
    'Name': 'Sanco Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE782L01012'
  },
  {
    'Code': 'SANDESH',
    'Name': 'The Sandesh Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583B01015'
  },
  {
    'Code': 'SANDHAR',
    'Name': 'Sandhar Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE278H01035'
  },
  {
    'Code': 'SANGAMIND',
    'Name': 'Sangam (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE495C01010'
  },
  {
    'Code': 'SANGHIIND',
    'Name': 'Sanghi Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE999B01013'
  },
  {
    'Code': 'SANGHVIMOV',
    'Name': 'Sanghvi Movers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE989A01024'
  },
  {
    'Code': 'SANGINITA',
    'Name': 'Sanginita Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE753W01010'
  },
  {
    'Code': 'SANOFI',
    'Name': 'Sanofi India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE058A01010'
  },
  {
    'Code': 'SANSERA',
    'Name': 'Sansera Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE953O01021'
  },
  {
    'Code': 'SANWARIA',
    'Name': 'Sanwaria Consumer Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE890C01046'
  },
  {
    'Code': 'SAPPHIRE',
    'Name': 'Sapphire Foods India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE806T01012'
  },
  {
    'Code': 'SARDAEN',
    'Name': 'Sarda Energy & Minerals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE385C01013'
  },
  {
    'Code': 'SAREGAMA',
    'Name': 'Saregama India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE979A01025'
  },
  {
    'Code': 'SARLAPOLY',
    'Name': 'Sarla Performance Fibers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE453D01025'
  },
  {
    'Code': 'SARVESHWAR',
    'Name': 'Sarveshwar Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE324X01018'
  },
  {
    'Code': 'SASKEN',
    'Name': 'Sasken Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE231F01020'
  },
  {
    'Code': 'SASTASUNDR',
    'Name': 'Sastasundar Ventures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE019J01013'
  },
  {
    'Code': 'SATHAISPAT',
    'Name': 'Sathavahana Ispat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE176C01016'
  },
  {
    'Code': 'SATIA',
    'Name': 'Satia Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE170E01023'
  },
  {
    'Code': 'SATIN',
    'Name': 'Satin Creditcare Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE836B01017'
  },
  {
    'Code': 'SATINDLTD',
    'Name': 'Sat Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE065D01027'
  },
  {
    'Code': 'SBC',
    'Name': 'SBC Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE04AK01028'
  },
  {
    'Code': 'SBCL',
    'Name': 'Shivalik Bimetal Controls Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE386D01027'
  },
  {
    'Code': 'SBGLP',
    'Name': 'Suratwwala Business Group Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE05ST01010'
  },
  {
    'Code': 'SBICARD',
    'Name': 'SBI Cards and Payment Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE018E01016'
  },
  {
    'Code': 'SBIETFCON',
    'Name': 'SBI Nifty Consumption ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SBIETFIT',
    'Name': 'SBI Nifty IT ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SBIETFPB',
    'Name': 'SBI Mutual Fund - SBI ETF Private Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SBIETFQLTY',
    'Name': 'SBI Mutual Fund - SBI-ETF Quality',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200KA1WX6'
  },
  {
    'Code': 'SBILIFE',
    'Name': 'SBI Life Insurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE123W01016'
  },
  {
    'Code': 'SBIN',
    'Name': 'State Bank of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE062A01020'
  },
  {
    'Code': 'SCAPDVR',
    'Name': 'Stampede Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE224E01036'
  },
  {
    'Code': 'SCHAEFFLER',
    'Name': 'Schaeffler India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE513A01022'
  },
  {
    'Code': 'SCHAND',
    'Name': 'S Chand And Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE807K01035'
  },
  {
    'Code': 'SCHNEIDER',
    'Name': 'Schneider Electric Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE839M01018'
  },
  {
    'Code': 'SCI',
    'Name': 'Shipping Corporation Of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE109A01011'
  },
  {
    'Code': 'SCPL',
    'Name': 'Sheetal Cool Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE501Y01019'
  },
  {
    'Code': 'SDBL',
    'Name': 'Som Distilleries & Breweries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE480C01020'
  },
  {
    'Code': 'SDL24BEES',
    'Name': 'Nippon Life India Am Ltd. - Nippon India Mf-Nippon India Etf Nifty Cpse Bond Plus Sdl-2024 Maturity',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SDL26BEES',
    'Name': 'Nippon India Mutual Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SEAMECLTD',
    'Name': 'Seamec Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE497B01018'
  },
  {
    'Code': 'SECURCRED',
    'Name': 'SecUR Credentials Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE195Y01010'
  },
  {
    'Code': 'SECURKLOUD',
    'Name': 'SECUREKLOUD TECHNOLOGIES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE650K01021'
  },
  {
    'Code': 'SEJALLTD',
    'Name': 'Sejal Glass Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE955I01044'
  },
  {
    'Code': 'SELAN',
    'Name': 'Selan Exploration Technology Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE818A01017'
  },
  {
    'Code': 'SELMC',
    'Name': 'SEL Manufacturing Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE105I01020'
  },
  {
    'Code': 'SEPC',
    'Name': 'SEPC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE964H01014'
  },
  {
    'Code': 'SEPOWER',
    'Name': 'S.E. Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE735M01018'
  },
  {
    'Code': 'SEQUENT',
    'Name': 'Sequent Scientific Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE807F01027'
  },
  {
    'Code': 'SERVOTECH',
    'Name': 'Servotech Power Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE782X01025'
  },
  {
    'Code': 'SESHAPAPER',
    'Name': 'Seshasayee Paper and Boards Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE630A01024'
  },
  {
    'Code': 'SETCO',
    'Name': 'Setco Automotive Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE878E01021'
  },
  {
    'Code': 'SETF10GILT',
    'Name': 'SBI Mutual Fund - SBI-ETF 10 Year Gilt',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200KA1JT1'
  },
  {
    'Code': 'SETFGOLD',
    'Name': 'SBI Mutual Fund - SBI-ETF Gold',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200K01099'
  },
  {
    'Code': 'SETFNIF50',
    'Name': 'SBI Mutual Fund - SBI-ETF Nifty 50',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200KA1FS1'
  },
  {
    'Code': 'SETFNIFBK',
    'Name': 'SBI Mutual Fund - SBI-ETF Nifty Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200KA1580'
  },
  {
    'Code': 'SETFNN50',
    'Name': 'SBI Mutual Fund - SBI-ETF Nifty Next 50',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF200KA1598'
  },
  {
    'Code': 'SETUINFRA',
    'Name': 'Setubandhan Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE023M01027'
  },
  {
    'Code': 'SEYAIND',
    'Name': 'Seya Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE573R01012'
  },
  {
    'Code': 'SFL',
    'Name': 'Sheela Foam Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE916U01025'
  },
  {
    'Code': 'SGIL',
    'Name': 'Synergy Green Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00QT01015'
  },
  {
    'Code': 'SGL',
    'Name': 'STL Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE353H01010'
  },
  {
    'Code': 'SHAHALLOYS',
    'Name': 'Shah Alloys Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE640C01011'
  },
  {
    'Code': 'SHAILY',
    'Name': 'Shaily Engineering Plastics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE151G01010'
  },
  {
    'Code': 'SHAKTIPUMP',
    'Name': 'Shakti Pumps (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE908D01010'
  },
  {
    'Code': 'SHALBY',
    'Name': 'Shalby Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE597J01018'
  },
  {
    'Code': 'SHALPAINTS',
    'Name': 'Shalimar Paints Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE849C01026'
  },
  {
    'Code': 'SHANKARA',
    'Name': 'Shankara Building Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE274V01019'
  },
  {
    'Code': 'SHANTI',
    'Name': 'Shanti Overseas (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE933X01016'
  },
  {
    'Code': 'SHANTIGEAR',
    'Name': 'Shanthi Gears Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE631A01022'
  },
  {
    'Code': 'SHARDACROP',
    'Name': 'Sharda Cropchem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE221J01015'
  },
  {
    'Code': 'SHARDAMOTR',
    'Name': 'Sharda Motor Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE597I01028'
  },
  {
    'Code': 'SHAREINDIA',
    'Name': 'Share India Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE932X01018'
  },
  {
    'Code': 'SHARIABEES',
    'Name': 'Nippon India ETF Shariah BeES',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF732E01128'
  },
  {
    'Code': 'SHEMAROO',
    'Name': 'Shemaroo Entertainment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE363M01019'
  },
  {
    'Code': 'SHILPAMED',
    'Name': 'Shilpa Medicare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE790G01031'
  },
  {
    'Code': 'SHIRPUR-G',
    'Name': 'Shirpur Gold Refinery Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'SHIVALIK',
    'Name': 'Shivalik Rasayan Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE788J01021'
  },
  {
    'Code': 'SHIVAMAUTO',
    'Name': 'Shivam Autotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE637H01024'
  },
  {
    'Code': 'SHIVAMILLS',
    'Name': 'Shiva Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE644Y01017'
  },
  {
    'Code': 'SHIVATEX',
    'Name': 'Shiva Texyarn Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE705C01020'
  },
  {
    'Code': 'SHK',
    'Name': 'S H Kelkar and Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE500L01026'
  },
  {
    'Code': 'SHOPERSTOP',
    'Name': 'Shoppers Stop Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE498B01024'
  },
  {
    'Code': 'SHRADHA',
    'Name': 'Shradha Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE715Y01023'
  },
  {
    'Code': 'SHREDIGCEM',
    'Name': 'Shree Digvijay Cement Co.Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE232A01011'
  },
  {
    'Code': 'SHREECEM',
    'Name': 'SHREE CEMENT LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE070A01015'
  },
  {
    'Code': 'SHREEPUSHK',
    'Name': 'Shree Pushkar Chemicals & Fertilisers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE712K01011'
  },
  {
    'Code': 'SHREERAMA',
    'Name': 'Shree Rama Multi-Tech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE879A01019'
  },
  {
    'Code': 'SHRENIK',
    'Name': 'Shrenik Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE632X01030'
  },
  {
    'Code': 'SHREYANIND',
    'Name': 'Shreyans Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE231C01019'
  },
  {
    'Code': 'SHREYAS',
    'Name': 'Shreyas Shipping & Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE757B01015'
  },
  {
    'Code': 'SHRIPISTON',
    'Name': 'Shriram Pistons & Rings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE526E01018'
  },
  {
    'Code': 'SHRIRAMFIN',
    'Name': 'Shriram Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE721A01013'
  },
  {
    'Code': 'SHRIRAMPPS',
    'Name': 'Shriram Properties Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE217L01019'
  },
  {
    'Code': 'SHYAMCENT',
    'Name': 'Shyam Century Ferrous Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE979R01011'
  },
  {
    'Code': 'SHYAMMETL',
    'Name': 'Shyam Metalics and Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE810G01011'
  },
  {
    'Code': 'SHYAMTEL',
    'Name': 'Shyam Telecom Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE635A01023'
  },
  {
    'Code': 'SICAL',
    'Name': 'Sical Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE075B01012'
  },
  {
    'Code': 'SIEMENS',
    'Name': 'Siemens Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE003A01024'
  },
  {
    'Code': 'SIGACHI',
    'Name': 'Sigachi Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0D0K01014'
  },
  {
    'Code': 'SIGIND',
    'Name': 'Signet Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE529F01035'
  },
  {
    'Code': 'SIKKO',
    'Name': 'Sikko Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE112X01017'
  },
  {
    'Code': 'SIL',
    'Name': 'Standard Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE173A01025'
  },
  {
    'Code': 'SILGO',
    'Name': 'Silgo Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01II01013'
  },
  {
    'Code': 'SILINV',
    'Name': 'SIL Investments Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE923A01015'
  },
  {
    'Code': 'SILLYMONKS',
    'Name': 'Silly Monks Entertainment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE203Y01012'
  },
  {
    'Code': 'SILVER',
    'Name': 'Aditya Birla Sun Life Silver ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SILVERBEES',
    'Name': 'Nippon India Silver ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'SILVERTUC',
    'Name': 'Silver Touch Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE625X01018'
  },
  {
    'Code': 'SIMBHALS',
    'Name': 'Simbhaoli Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE748T01016'
  },
  {
    'Code': 'SIMPLEXINF',
    'Name': 'Simplex Infrastructures Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE059B01024'
  },
  {
    'Code': 'SINTERCOM',
    'Name': 'Sintercom India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE129Z01016'
  },
  {
    'Code': 'SIRCA',
    'Name': 'Sirca Paints India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE792Z01011'
  },
  {
    'Code': 'SIS',
    'Name': 'SIS LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE285J01028'
  },
  {
    'Code': 'SITINET',
    'Name': 'Siti Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE965H01011'
  },
  {
    'Code': 'SIYSIL',
    'Name': 'Siyaram Silk Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE076B01028'
  },
  {
    'Code': 'SJS',
    'Name': 'S.J.S. Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE284S01014'
  },
  {
    'Code': 'SJVN',
    'Name': 'SJVN Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE002L01015'
  },
  {
    'Code': 'SKFINDIA',
    'Name': 'SKF India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE640A01023'
  },
  {
    'Code': 'SKIL',
    'Name': 'SKIL Infrastructure Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE429F01012'
  },
  {
    'Code': 'SKIPPER',
    'Name': 'Skipper Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE439E01022'
  },
  {
    'Code': 'SKMEGGPROD',
    'Name': 'SKM Egg Products Export (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE411D01015'
  },
  {
    'Code': 'SKYGOLD',
    'Name': 'Sky Gold Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01IU01018'
  },
  {
    'Code': 'SMARTLINK',
    'Name': 'Smartlink Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE178C01020'
  },
  {
    'Code': 'SMCGLOBAL',
    'Name': 'SMC Global Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE103C01036'
  },
  {
    'Code': 'SMLISUZU',
    'Name': 'SML Isuzu Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE294B01019'
  },
  {
    'Code': 'SMLT',
    'Name': 'Sarthak Metals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE017W01010'
  },
  {
    'Code': 'SMSLIFE',
    'Name': 'SMS Lifesciences India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE320X01016'
  },
  {
    'Code': 'SMSPHARMA',
    'Name': 'SMS Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE812G01025'
  },
  {
    'Code': 'SNOWMAN',
    'Name': 'Snowman Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE734N01019'
  },
  {
    'Code': 'SOBHA',
    'Name': 'Sobha Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE671H01015'
  },
  {
    'Code': 'SOFTTECH',
    'Name': 'Softtech Engineers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE728Z01015'
  },
  {
    'Code': 'SOLARA',
    'Name': 'Solara Active Pharma Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE624Z01016'
  },
  {
    'Code': 'SOLARINDS',
    'Name': 'Solar Industries India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE343H01029'
  },
  {
    'Code': 'SOMANYCERA',
    'Name': 'Somany Ceramics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE355A01028'
  },
  {
    'Code': 'SOMATEX',
    'Name': 'Soma Textiles & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE314C01013'
  },
  {
    'Code': 'SOMICONVEY',
    'Name': 'Somi Conveyor Beltings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE323J01019'
  },
  {
    'Code': 'SONACOMS',
    'Name': 'Sona BLW Precision Forgings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE073K01018'
  },
  {
    'Code': 'SONAMCLOCK',
    'Name': 'Sonam Clock Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00LM01011'
  },
  {
    'Code': 'SONATSOFTW',
    'Name': 'Sonata Software Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE269A01021'
  },
  {
    'Code': 'SOTL',
    'Name': 'Savita Oil Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE035D01020'
  },
  {
    'Code': 'SOUTHBANK',
    'Name': 'The South Indian Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE683A01023'
  },
  {
    'Code': 'SOUTHWEST',
    'Name': 'South West Pinnacle Exploration Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE980Y01015'
  },
  {
    'Code': 'SPAL',
    'Name': 'S. P. Apparels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE212I01016'
  },
  {
    'Code': 'SPANDANA',
    'Name': 'Spandana Sphoorty Financial Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE572J01011'
  },
  {
    'Code': 'SPARC',
    'Name': 'Sun Pharma Advanced Research Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE232I01014'
  },
  {
    'Code': 'SPCENET',
    'Name': 'Spacenet Enterprises India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE970N01027'
  },
  {
    'Code': 'SPECIALITY',
    'Name': 'Speciality Restaurants Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE247M01014'
  },
  {
    'Code': 'SPENCERS',
    'Name': 'Spencer\'s Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE020801028'
  },
  {
    'Code': 'SPENTEX',
    'Name': 'Spentex Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE376C01020'
  },
  {
    'Code': 'SPIC',
    'Name': 'Southern Petrochemicals Industries Corporation  Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE147A01011'
  },
  {
    'Code': 'SPLIL',
    'Name': 'SPL Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE978G01016'
  },
  {
    'Code': 'SPLPETRO',
    'Name': 'Supreme Petrochem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE663A01033'
  },
  {
    'Code': 'SPMLINFRA',
    'Name': 'SPML Infra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE937A01023'
  },
  {
    'Code': 'SPORTKING',
    'Name': 'Sportking India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE885H01011'
  },
  {
    'Code': 'SPTL',
    'Name': 'Sintex Plastics Technology Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE501W01021'
  },
  {
    'Code': 'SPYL',
    'Name': 'Shekhawati Poly-Yarn Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE268L01020'
  },
  {
    'Code': 'SREEL',
    'Name': 'Sreeleathers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE099F01013'
  },
  {
    'Code': 'SREINFRA',
    'Name': 'SREI Infrastructure Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE872A01014'
  },
  {
    'Code': 'SRF',
    'Name': 'SRF Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE647A01010'
  },
  {
    'Code': 'SRHHYPOLTD',
    'Name': 'Sree Rayalaseema Hi-Strength Hypo Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE917H01012'
  },
  {
    'Code': 'SRPL',
    'Name': 'Shree Ram Proteins Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE008Z01012'
  },
  {
    'Code': 'SSWL',
    'Name': 'Steel Strips Wheels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE802C01033'
  },
  {
    'Code': 'STAMPEDE',
    'Name': 'Stampede Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE224E01028'
  },
  {
    'Code': 'STAR',
    'Name': 'Strides Pharma Science Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE939A01011'
  },
  {
    'Code': 'STARCEMENT',
    'Name': 'Star Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE460H01021'
  },
  {
    'Code': 'STARHEALTH',
    'Name': 'Star Health and Allied Insurance Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE575P01011'
  },
  {
    'Code': 'STARPAPER',
    'Name': 'Star Paper Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE733A01018'
  },
  {
    'Code': 'STARTECK',
    'Name': 'Starteck Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE992I01013'
  },
  {
    'Code': 'STCINDIA',
    'Name': 'The State Trading Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE655A01013'
  },
  {
    'Code': 'STEELCAS',
    'Name': 'Steelcast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE124E01020'
  },
  {
    'Code': 'STEELCITY',
    'Name': 'Steel City Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE395H01011'
  },
  {
    'Code': 'STEELXIND',
    'Name': 'STEEL EXCHANGE INDIA LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE503B01021'
  },
  {
    'Code': 'STEL',
    'Name': 'Stel Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE577L01016'
  },
  {
    'Code': 'STERTOOLS',
    'Name': 'Sterling Tools Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE334A01023'
  },
  {
    'Code': 'STLTECH',
    'Name': 'Sterlite Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE089C01029'
  },
  {
    'Code': 'STOVEKRAFT',
    'Name': 'Stove Kraft Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00IN01015'
  },
  {
    'Code': 'STYLAMIND',
    'Name': 'Stylam Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE239C01020'
  },
  {
    'Code': 'STYRENIX',
    'Name': 'Styrenix Performance Materials Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE189B01011'
  },
  {
    'Code': 'SUBEXLTD',
    'Name': 'Subex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE754A01055'
  },
  {
    'Code': 'SUBROS',
    'Name': 'Subros Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE287B01021'
  },
  {
    'Code': 'SUDARSCHEM',
    'Name': 'Sudarshan Chemical Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE659A01023'
  },
  {
    'Code': 'SUKHJITS',
    'Name': 'Sukhjit Starch & Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE450E01011'
  },
  {
    'Code': 'SULA',
    'Name': 'Sula Vineyards Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE142Q01026'
  },
  {
    'Code': 'SUMEETINDS',
    'Name': 'Sumeet Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE235C01010'
  },
  {
    'Code': 'SUMICHEM',
    'Name': 'Sumitomo Chemical India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE258G01013'
  },
  {
    'Code': 'SUMIT',
    'Name': 'Sumit Woods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE748Z01013'
  },
  {
    'Code': 'SUMMITSEC',
    'Name': 'Summit Securities Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE519C01017'
  },
  {
    'Code': 'SUNCLAYLTD',
    'Name': 'Sundaram Clayton Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE105A01035'
  },
  {
    'Code': 'SUNDARAM',
    'Name': 'Sundaram Multi Pap Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE108E01023'
  },
  {
    'Code': 'SUNDARMFIN',
    'Name': 'Sundaram Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE660A01013'
  },
  {
    'Code': 'SUNDARMHLD',
    'Name': 'Sundaram Finance Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE202Z01029'
  },
  {
    'Code': 'SUNDRMBRAK',
    'Name': 'Sundaram Brake Linings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE073D01013'
  },
  {
    'Code': 'SUNDRMFAST',
    'Name': 'Sundram Fasteners Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE387A01021'
  },
  {
    'Code': 'SUNFLAG',
    'Name': 'Sunflag Iron And Steel Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE947A01014'
  },
  {
    'Code': 'SUNPHARMA',
    'Name': 'Sun Pharmaceutical Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE044A01036'
  },
  {
    'Code': 'SUNTECK',
    'Name': 'Sunteck Realty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE805D01034'
  },
  {
    'Code': 'SUNTV',
    'Name': 'Sun TV Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE424H01027'
  },
  {
    'Code': 'SUPERHOUSE',
    'Name': 'Superhouse Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE712B01010'
  },
  {
    'Code': 'SUPERSPIN',
    'Name': 'Super Spinning Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE662A01027'
  },
  {
    'Code': 'SUPRAJIT',
    'Name': 'Suprajit Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE399C01030'
  },
  {
    'Code': 'SUPREMEENG',
    'Name': 'Supreme Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE319Z01021'
  },
  {
    'Code': 'SUPREMEIND',
    'Name': 'Supreme Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE195A01028'
  },
  {
    'Code': 'SUPREMEINF',
    'Name': 'Supreme Infrastructure India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE550H01011'
  },
  {
    'Code': 'SUPRIYA',
    'Name': 'Supriya Lifescience Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE07RO01027'
  },
  {
    'Code': 'SURANASOL',
    'Name': 'Surana Solar Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE272L01022'
  },
  {
    'Code': 'SURANAT&P',
    'Name': 'Surana Telecom and Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE130B01031'
  },
  {
    'Code': 'SURYALAXMI',
    'Name': 'Suryalakshmi Cotton Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE713B01026'
  },
  {
    'Code': 'SURYAROSNI',
    'Name': 'Surya Roshni Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE335A01012'
  },
  {
    'Code': 'SURYODAY',
    'Name': 'Suryoday Small Finance Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE428Q01011'
  },
  {
    'Code': 'SUTLEJTEX',
    'Name': 'Sutlej Textiles and Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE645H01027'
  },
  {
    'Code': 'SUULD',
    'Name': 'Suumaya Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE591Q01016'
  },
  {
    'Code': 'SUVEN',
    'Name': 'Suven Life Sciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE495B01038'
  },
  {
    'Code': 'SUVENPHAR',
    'Name': 'Suven Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03QK01018'
  },
  {
    'Code': 'SUVIDHAA',
    'Name': 'Suvidhaa Infoserve Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE018401013'
  },
  {
    'Code': 'SUZLON',
    'Name': 'Suzlon Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE040H01021'
  },
  {
    'Code': 'SVPGLOB',
    'Name': 'SVP GLOBAL TEXTILES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE308E01029'
  },
  {
    'Code': 'SWANENERGY',
    'Name': 'Swan Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE665A01038'
  },
  {
    'Code': 'SWARAJENG',
    'Name': 'Swaraj Engines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE277A01016'
  },
  {
    'Code': 'SWELECTES',
    'Name': 'Swelect Energy Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE409B01013'
  },
  {
    'Code': 'SWSOLAR',
    'Name': 'Sterling and Wilson Renewable Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00M201021'
  },
  {
    'Code': 'SYMPHONY',
    'Name': 'Symphony Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE225D01027'
  },
  {
    'Code': 'SYNCOMF',
    'Name': 'Syncom Formulations (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE312C01025'
  },
  {
    'Code': 'SYNGENE',
    'Name': 'Syngene International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE398R01022'
  },
  {
    'Code': 'SYRMA',
    'Name': 'Syrma SGS Technology Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0DYJ01015'
  },
  {
    'Code': 'TAINWALCHM',
    'Name': 'Tainwala Chemical and Plastic (I) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE123C01018'
  },
  {
    'Code': 'TAJGVK',
    'Name': 'Taj GVK Hotels & Resorts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE586B01026'
  },
  {
    'Code': 'TAKE',
    'Name': 'Take Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE142I01023'
  },
  {
    'Code': 'TALBROAUTO',
    'Name': 'Talbros Automotive Components Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE187D01011'
  },
  {
    'Code': 'TALWALKARS',
    'Name': 'Talwalkars Better Value Fitness Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE627Z01019'
  },
  {
    'Code': 'TALWGYM',
    'Name': 'Talwalkars Healthclubs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE627Z01019'
  },
  {
    'Code': 'TANLA',
    'Name': 'Tanla Platforms Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE483C01032'
  },
  {
    'Code': 'TANTIACONS',
    'Name': 'Tantia Constructions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE388G01018'
  },
  {
    'Code': 'TARAPUR',
    'Name': 'Tarapur Transformers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE747K01017'
  },
  {
    'Code': 'TARC',
    'Name': 'TARC Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0EK901012'
  },
  {
    'Code': 'TARMAT',
    'Name': 'Tarmat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE924H01018'
  },
  {
    'Code': 'TARSONS',
    'Name': 'Tarsons Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE144Z01023'
  },
  {
    'Code': 'TASTYBITE',
    'Name': 'Tasty Bite Eatables Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE488B01017'
  },
  {
    'Code': 'TATACHEM',
    'Name': 'Tata Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE092A01019'
  },
  {
    'Code': 'TATACOFFEE',
    'Name': 'Tata Coffee Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE493A01027'
  },
  {
    'Code': 'TATACOMM',
    'Name': 'Tata Communications Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE151A01013'
  },
  {
    'Code': 'TATACONSUM',
    'Name': 'TATA CONSUMER PRODUCTS LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE192A01025'
  },
  {
    'Code': 'TATAELXSI',
    'Name': 'Tata Elxsi Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE670A01012'
  },
  {
    'Code': 'TATAINVEST',
    'Name': 'Tata Investment Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE672A01018'
  },
  {
    'Code': 'TATAMETALI',
    'Name': 'Tata Metaliks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE056C01010'
  },
  {
    'Code': 'TATAMOTORS',
    'Name': 'Tata Motors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE155A01022'
  },
  {
    'Code': 'TATAMTRDVR',
    'Name': 'Tata Motors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'IN9155A01020'
  },
  {
    'Code': 'TATAPOWER',
    'Name': 'Tata Power Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE245A01021'
  },
  {
    'Code': 'TATASTEEL',
    'Name': 'Tata Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE081A01020'
  },
  {
    'Code': 'TATASTLLP',
    'Name': 'Tata Steel Long Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE674A01014'
  },
  {
    'Code': 'TATVA',
    'Name': 'Tatva Chintan Pharma Chem Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0GK401011'
  },
  {
    'Code': 'TBZ',
    'Name': 'Tribhovandas Bhimji Zaveri Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE760L01018'
  },
  {
    'Code': 'TCI',
    'Name': 'Transport Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE688A01022'
  },
  {
    'Code': 'TCIEXP',
    'Name': 'TCI Express Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE586V01016'
  },
  {
    'Code': 'TCIFINANCE',
    'Name': 'TCI Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE911B01018'
  },
  {
    'Code': 'TCNSBRANDS',
    'Name': 'TCNS Clothing Co. Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE778U01029'
  },
  {
    'Code': 'TCPLPACK',
    'Name': 'TCPL Packaging Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE822C01015'
  },
  {
    'Code': 'TCS',
    'Name': 'Tata Consultancy Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE467B01029'
  },
  {
    'Code': 'TDPOWERSYS',
    'Name': 'TD Power Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE419M01027'
  },
  {
    'Code': 'TEAMLEASE',
    'Name': 'Teamlease Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE985S01024'
  },
  {
    'Code': 'TECH',
    'Name': 'Aditya Birla Sun Life Amc Ltd. - Absl Mutual Fund - Absl Nifty IT ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'TECHIN',
    'Name': 'Techindia Nirman Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE778A01021'
  },
  {
    'Code': 'TECHM',
    'Name': 'Tech Mahindra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE669C01036'
  },
  {
    'Code': 'TECHNOE',
    'Name': 'Techno Electric & Engineering Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE285K01026'
  },
  {
    'Code': 'TECHNOFAB',
    'Name': 'Technofab Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE509K01011'
  },
  {
    'Code': 'TEGA',
    'Name': 'Tega Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE011K01018'
  },
  {
    'Code': 'TEJASNET',
    'Name': 'Tejas Networks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE010J01012'
  },
  {
    'Code': 'TEMBO',
    'Name': 'Tembo Global Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE869Y01010'
  },
  {
    'Code': 'TERASOFT',
    'Name': 'Tera Software Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE482B01010'
  },
  {
    'Code': 'TEXINFRA',
    'Name': 'Texmaco Infrastructure & Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE435C01024'
  },
  {
    'Code': 'TEXMOPIPES',
    'Name': 'Texmo Pipes and Products Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE141K01013'
  },
  {
    'Code': 'TEXRAIL',
    'Name': 'Texmaco Rail & Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE621L01012'
  },
  {
    'Code': 'TFCILTD',
    'Name': 'Tourism Finance Corporation of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE305A01015'
  },
  {
    'Code': 'TFL',
    'Name': 'Transwarranty Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE804H01012'
  },
  {
    'Code': 'TGBHOTELS',
    'Name': 'TGB Banquets And Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE797H01018'
  },
  {
    'Code': 'THANGAMAYL',
    'Name': 'Thangamayil Jewellery Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE085J01014'
  },
  {
    'Code': 'THEINVEST',
    'Name': 'The Investment Trust Of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE924D01017'
  },
  {
    'Code': 'THEJO-SM',
    'Name': 'Thejo Engineering Ltd',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE121N01019'
  },
  {
    'Code': 'THEMISMED',
    'Name': 'Themis Medicare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE083B01016'
  },
  {
    'Code': 'THERMAX',
    'Name': 'Thermax Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE152A01029'
  },
  {
    'Code': 'THIRUSUGAR',
    'Name': 'Thiru Arooran Sugars Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE409A01015'
  },
  {
    'Code': 'THOMASCOOK',
    'Name': 'Thomas Cook  (India)  Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE332A01027'
  },
  {
    'Code': 'THOMASCOTT',
    'Name': 'Thomas Scott (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE480M01011'
  },
  {
    'Code': 'THYROCARE',
    'Name': 'Thyrocare Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE594H01019'
  },
  {
    'Code': 'TI',
    'Name': 'Tilaknagar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE133E01013'
  },
  {
    'Code': 'TIDEWATER',
    'Name': 'Tide Water Oil Company (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE484C01030'
  },
  {
    'Code': 'TIIL',
    'Name': 'Technocraft Industries (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE545H01011'
  },
  {
    'Code': 'TIINDIA',
    'Name': 'Tube Investments of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE974X01010'
  },
  {
    'Code': 'TIJARIA',
    'Name': 'Tijaria Polypipes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE440L01017'
  },
  {
    'Code': 'TIL',
    'Name': 'TIL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE806C01018'
  },
  {
    'Code': 'TIMESGTY',
    'Name': 'Times Guaranty Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE289C01025'
  },
  {
    'Code': 'TIMETECHNO',
    'Name': 'Time Technoplast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE508G01029'
  },
  {
    'Code': 'TIMKEN',
    'Name': 'Timken India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE325A01013'
  },
  {
    'Code': 'TINPLATE',
    'Name': 'The Tinplate Company of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE422C01014'
  },
  {
    'Code': 'TIPSFILMS',
    'Name': 'Tips Films Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0LQS01015'
  },
  {
    'Code': 'TIPSINDLTD',
    'Name': 'TIPS Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE716B01011'
  },
  {
    'Code': 'TIRUMALCHM',
    'Name': 'Thirumalai Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE338A01024'
  },
  {
    'Code': 'TIRUPATIFL',
    'Name': 'Tirupati Forge Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE319Y01024'
  },
  {
    'Code': 'TITAN',
    'Name': 'Titan Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE280A01028'
  },
  {
    'Code': 'TMB',
    'Name': 'Tamilnad Mercantile Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE668A01016'
  },
  {
    'Code': 'TNIDETF',
    'Name': 'Tata Nifty India Digital ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'TNPETRO',
    'Name': 'Tamilnadu PetroProducts Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE148A01019'
  },
  {
    'Code': 'TNPL',
    'Name': 'Tamil Nadu Newsprint & Papers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE107A01015'
  },
  {
    'Code': 'TNTELE',
    'Name': 'Tamilnadu Telecommunication Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE141D01018'
  },
  {
    'Code': 'TOKYOPLAST',
    'Name': 'Tokyo Plast International Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE932C01012'
  },
  {
    'Code': 'TORNTPHARM',
    'Name': 'Torrent Pharmaceuticals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE685A01028'
  },
  {
    'Code': 'TORNTPOWER',
    'Name': 'Torrent Power Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE813H01021'
  },
  {
    'Code': 'TOTAL',
    'Name': 'Total Transport Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE336X01012'
  },
  {
    'Code': 'TOUCHWOOD',
    'Name': 'Touchwood Entertainment Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE486Y01013'
  },
  {
    'Code': 'TPLPLASTEH',
    'Name': 'TPL Plastech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE413G01022'
  },
  {
    'Code': 'TRACXN',
    'Name': 'Tracxn Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0HMF01019'
  },
  {
    'Code': 'TREEHOUSE',
    'Name': 'Tree House Education & Accessories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE040M01013'
  },
  {
    'Code': 'TREJHARA',
    'Name': 'TREJHARA SOLUTIONS LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE00CA01015'
  },
  {
    'Code': 'TRENT',
    'Name': 'Trent Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE849A01020'
  },
  {
    'Code': 'TRF',
    'Name': 'TRF Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE391D01019'
  },
  {
    'Code': 'TRIDENT',
    'Name': 'Trident Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE064C01022'
  },
  {
    'Code': 'TRIGYN',
    'Name': 'Trigyn Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE948A01012'
  },
  {
    'Code': 'TRIL',
    'Name': 'Transformers And Rectifiers (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE763I01026'
  },
  {
    'Code': 'TRITURBINE',
    'Name': 'Triveni Turbine Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE152M01016'
  },
  {
    'Code': 'TRIVENI',
    'Name': 'Triveni Engineering & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE256C01024'
  },
  {
    'Code': 'TRU',
    'Name': 'TruCap Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE615R01029'
  },
  {
    'Code': 'TTKHLTCARE',
    'Name': 'TTK Healthcare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE910C01018'
  },
  {
    'Code': 'TTKPRESTIG',
    'Name': 'TTK Prestige Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE690A01028'
  },
  {
    'Code': 'TTL',
    'Name': 'T T Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE592B01016'
  },
  {
    'Code': 'TTML',
    'Name': 'Tata Teleservices (Maharashtra) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE517B01013'
  },
  {
    'Code': 'TV18BRDCST',
    'Name': 'TV18 Broadcast Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE886H01027'
  },
  {
    'Code': 'TVSELECT',
    'Name': 'TVS Electronics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE236G01019'
  },
  {
    'Code': 'TVSMOTOR',
    'Name': 'TVS Motor Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE494B01023'
  },
  {
    'Code': 'TVSSRICHAK',
    'Name': 'TVS Srichakra Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE421C01016'
  },
  {
    'Code': 'TVTODAY',
    'Name': 'TV Today Network Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE038F01029'
  },
  {
    'Code': 'TVVISION',
    'Name': 'TV Vision Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE871L01013'
  },
  {
    'Code': 'TWL',
    'Name': 'Titagarh Wagons Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE615H01020'
  },
  {
    'Code': 'UBL',
    'Name': 'United Breweries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE686F01025'
  },
  {
    'Code': 'UCALFUEL',
    'Name': 'Ucal Fuel Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE139B01016'
  },
  {
    'Code': 'UCOBANK',
    'Name': 'UCO Bank',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE691A01018'
  },
  {
    'Code': 'UDAICEMENT',
    'Name': 'Udaipur Cement Works Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE225C01029'
  },
  {
    'Code': 'UFLEX',
    'Name': 'UFLEX Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE516A01017'
  },
  {
    'Code': 'UFO',
    'Name': 'UFO Moviez India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE527H01019'
  },
  {
    'Code': 'UGARSUGAR',
    'Name': 'The Ugar Sugar Works Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE071E01023'
  },
  {
    'Code': 'UGROCAP',
    'Name': 'Ugro Capital Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE583D01011'
  },
  {
    'Code': 'UJAAS',
    'Name': 'Ujaas Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE899L01022'
  },
  {
    'Code': 'UJJIVAN',
    'Name': 'Ujjivan Financial Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE334L01012'
  },
  {
    'Code': 'UJJIVANSFB',
    'Name': 'Ujjivan Small Finance Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE551W01018'
  },
  {
    'Code': 'ULTRACEMCO',
    'Name': 'UltraTech Cement Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE481G01011'
  },
  {
    'Code': 'UMAEXPORTS',
    'Name': 'Uma Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0GIU01018'
  },
  {
    'Code': 'UMANGDAIRY',
    'Name': 'Umang Dairies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE864B01027'
  },
  {
    'Code': 'UMESLTD',
    'Name': 'Usha Martin Education & Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE240C01028'
  },
  {
    'Code': 'UNICHEMLAB',
    'Name': 'Unichem Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE351A01035'
  },
  {
    'Code': 'UNIDT',
    'Name': 'United Drilling Tools Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE961D01019'
  },
  {
    'Code': 'UNIENTER',
    'Name': 'Uniphos Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE037A01022'
  },
  {
    'Code': 'UNIINFO',
    'Name': 'Uniinfo Telecom Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE481Z01011'
  },
  {
    'Code': 'UNIONBANK',
    'Name': 'Union Bank of India',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE692A01016'
  },
  {
    'Code': 'UNIPARTS',
    'Name': 'Uniparts India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE244O01017'
  },
  {
    'Code': 'UNIPLY',
    'Name': 'Uniply Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE950G01023'
  },
  {
    'Code': 'UNITECH',
    'Name': 'Unitech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE694A01020'
  },
  {
    'Code': 'UNITEDPOLY',
    'Name': 'United Polyfab Gujarat Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE368U01011'
  },
  {
    'Code': 'UNITEDTEA',
    'Name': 'The United Nilgiri Tea Estates Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE458F01011'
  },
  {
    'Code': 'UNITY',
    'Name': 'Unity Infraprojects Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE466H01028'
  },
  {
    'Code': 'UNIVAFOODS',
    'Name': 'Univa Foods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE275F01019'
  },
  {
    'Code': 'UNIVASTU',
    'Name': 'Univastu India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE562X01013'
  },
  {
    'Code': 'UNIVCABLES',
    'Name': 'Universal Cables Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE279A01012'
  },
  {
    'Code': 'UNIVPHOTO',
    'Name': 'Universus Photo Imagings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE03V001013'
  },
  {
    'Code': 'UNOMINDA',
    'Name': 'UNO Minda Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE405E01023'
  },
  {
    'Code': 'UPL',
    'Name': 'UPL Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE628A01036'
  },
  {
    'Code': 'URJA',
    'Name': 'Urja Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE550C01020'
  },
  {
    'Code': 'USHAMART',
    'Name': 'Usha Martin Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE228A01035'
  },
  {
    'Code': 'UTIAMC',
    'Name': 'UTI Asset Management Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE094J01016'
  },
  {
    'Code': 'UTIBANKETF',
    'Name': 'UTI Nifty Bank ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'UTINEXT50',
    'Name': 'UTI Mutual Fund - UTI-Nifty Next 50 Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF789FC1N82'
  },
  {
    'Code': 'UTINIFTETF',
    'Name': 'UTI Mutual Fund - UTI - Nifty Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF789FB1X41'
  },
  {
    'Code': 'UTISENSETF',
    'Name': 'UTI Mutual Fund - UTI - Sensex Exchange Traded Fund',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': 'INF789FB1X58'
  },
  {
    'Code': 'UTISXN50',
    'Name': 'UTI Mutual Fund - UTI S&P BSE Sensex Next 50 ETF',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'ETF',
    'Isin': null
  },
  {
    'Code': 'UTTAMSUGAR',
    'Name': 'Uttam Sugar Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE786F01031'
  },
  {
    'Code': 'V2RETAIL',
    'Name': 'V2 Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE945H01013'
  },
  {
    'Code': 'VADILALIND',
    'Name': 'Vadilal Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE694D01016'
  },
  {
    'Code': 'VAIBHAVGBL',
    'Name': 'Vaibhav Global Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE884A01027'
  },
  {
    'Code': 'VAISHALI',
    'Name': 'Vaishali Pharma Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE972X01014'
  },
  {
    'Code': 'VAKRANGEE',
    'Name': 'Vakrangee Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE051B01021'
  },
  {
    'Code': 'VALIANTORG',
    'Name': 'Valiant Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE565V01010'
  },
  {
    'Code': 'VARDHACRLC',
    'Name': 'Vardhman Acrylics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE116G01013'
  },
  {
    'Code': 'VARDMNPOLY',
    'Name': 'Vardhman Polytex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE835A01011'
  },
  {
    'Code': 'VARROC',
    'Name': 'Varroc Engineering Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE665L01035'
  },
  {
    'Code': 'VASCONEQ',
    'Name': 'Vascon Engineers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE893I01013'
  },
  {
    'Code': 'VASWANI',
    'Name': 'Vaswani Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE590L01019'
  },
  {
    'Code': 'VBL',
    'Name': 'Varun Beverages Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE200M01013'
  },
  {
    'Code': 'VCL',
    'Name': 'Vaxtex Cotfab Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE098201036'
  },
  {
    'Code': 'VEDL',
    'Name': 'Vedanta Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE205A01025'
  },
  {
    'Code': 'VENKEYS',
    'Name': 'Venky\'s (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE398A01010'
  },
  {
    'Code': 'VENUSPIPES',
    'Name': 'Venus Pipes & Tubes Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0JA001018'
  },
  {
    'Code': 'VENUSREM',
    'Name': 'Venus Remedies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE411B01019'
  },
  {
    'Code': 'VERANDA',
    'Name': 'Veranda Learning Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0IQ001011'
  },
  {
    'Code': 'VERTOZ',
    'Name': 'Vertoz Advertising Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE188Y01015'
  },
  {
    'Code': 'VESUVIUS',
    'Name': 'Vesuvius India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE386A01015'
  },
  {
    'Code': 'VETO',
    'Name': 'Veto Switchgears And Cables Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE918N01018'
  },
  {
    'Code': 'VGUARD',
    'Name': 'V-Guard Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE951I01027'
  },
  {
    'Code': 'VHL',
    'Name': 'Vardhman Holdings Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE701A01023'
  },
  {
    'Code': 'VICEROY',
    'Name': 'Viceroy Hotels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE048C01017'
  },
  {
    'Code': 'VIDEOIND',
    'Name': 'Videocon Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE703A01011'
  },
  {
    'Code': 'VIDHIING',
    'Name': 'Vidhi Specialty Food Ingredients Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE632C01026'
  },
  {
    'Code': 'VIJAYA',
    'Name': 'Vijaya Diagnostic Centre Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE043W01024'
  },
  {
    'Code': 'VIJIFIN',
    'Name': 'Viji Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE159N01027'
  },
  {
    'Code': 'VIKASECO',
    'Name': 'Vikas EcoTech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE806A01020'
  },
  {
    'Code': 'VIKASLIFE',
    'Name': 'Vikas Lifecare Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE161L01027'
  },
  {
    'Code': 'VIMTALABS',
    'Name': 'Vimta Labs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE579C01029'
  },
  {
    'Code': 'VINATIORGA',
    'Name': 'Vinati Organics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE410B01037'
  },
  {
    'Code': 'VINDHYATEL',
    'Name': 'Vindhya Telelinks Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE707A01012'
  },
  {
    'Code': 'VINEETLAB',
    'Name': 'Vineet Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE505Y01010'
  },
  {
    'Code': 'VINNY',
    'Name': 'Vinny Overseas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01KI01027'
  },
  {
    'Code': 'VINYLINDIA',
    'Name': 'Vinyl Chemicals (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE250B01029'
  },
  {
    'Code': 'VIPCLOTHNG',
    'Name': 'VIP Clothing Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE450G01024'
  },
  {
    'Code': 'VIPIND',
    'Name': 'VIP Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE054A01027'
  },
  {
    'Code': 'VIPULLTD',
    'Name': 'Vipul Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE946H01037'
  },
  {
    'Code': 'VISAKAIND',
    'Name': 'Visaka Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE392A01013'
  },
  {
    'Code': 'VISASTEEL',
    'Name': 'Visa Steel Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE286H01012'
  },
  {
    'Code': 'VISESHINFO',
    'Name': 'Visesh Infotecnics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE861A01058'
  },
  {
    'Code': 'VISHAL',
    'Name': 'Vishal Fabrics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE755Q01025'
  },
  {
    'Code': 'VISHNU',
    'Name': 'Vishnu Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE270I01022'
  },
  {
    'Code': 'VISHWARAJ',
    'Name': 'Vishwaraj Sugar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE430N01022'
  },
  {
    'Code': 'VIVIDHA',
    'Name': 'Visagar Polytex Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE370E01029'
  },
  {
    'Code': 'VIVIMEDLAB',
    'Name': 'Vivimed Labs Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE526G01021'
  },
  {
    'Code': 'VLSFINANCE',
    'Name': 'VLS Finance Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE709A01018'
  },
  {
    'Code': 'VMART',
    'Name': 'V-Mart Retail Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE665J01013'
  },
  {
    'Code': 'VOLTAMP',
    'Name': 'Voltamp Transformers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE540H01012'
  },
  {
    'Code': 'VOLTAS',
    'Name': 'Voltas Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE226A01021'
  },
  {
    'Code': 'VRLLOG',
    'Name': 'VRL Logistics Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE366I01010'
  },
  {
    'Code': 'VSSL',
    'Name': 'Vardhman Special Steels Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE050M01012'
  },
  {
    'Code': 'VSTIND',
    'Name': 'VST Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE710A01016'
  },
  {
    'Code': 'VSTTILLERS',
    'Name': 'V.S.T Tillers Tractors Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE764D01017'
  },
  {
    'Code': 'VTL',
    'Name': 'Vardhman Textiles Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE825A01020'
  },
  {
    'Code': 'WABAG',
    'Name': 'VA Tech Wabag Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE956G01038'
  },
  {
    'Code': 'WALCHANNAG',
    'Name': 'Walchandnagar Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE711A01022'
  },
  {
    'Code': 'WANBURY',
    'Name': 'Wanbury Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE107F01022'
  },
  {
    'Code': 'WATERBASE',
    'Name': 'Waterbase Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE054C01015'
  },
  {
    'Code': 'WEALTH',
    'Name': 'Wealth First Portfolio Managers Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE658T01017'
  },
  {
    'Code': 'WEBELSOLAR',
    'Name': 'Websol Energy System Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE855C01015'
  },
  {
    'Code': 'WEIZMANIND',
    'Name': 'Weizmann Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE080A01014'
  },
  {
    'Code': 'WEL',
    'Name': 'Wonder Electricals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE02WG01016'
  },
  {
    'Code': 'WELCORP',
    'Name': 'Welspun Corp Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE191B01025'
  },
  {
    'Code': 'WELENT',
    'Name': 'Welspun Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE625G01013'
  },
  {
    'Code': 'WELINV',
    'Name': 'Welspun Investments and Commercials Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE389K01018'
  },
  {
    'Code': 'WELSPUNIND',
    'Name': 'Welspun India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE192B01031'
  },
  {
    'Code': 'WENDT',
    'Name': 'Wendt (India) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE274C01019'
  },
  {
    'Code': 'WESTLIFE',
    'Name': 'WESTLIFE FOODWORLD LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE274F01020'
  },
  {
    'Code': 'WEWIN',
    'Name': 'WE WIN LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE082W01014'
  },
  {
    'Code': 'WHEELS',
    'Name': 'Wheels India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE715A01015'
  },
  {
    'Code': 'WHIRLPOOL',
    'Name': 'Whirlpool of India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE716A01013'
  },
  {
    'Code': 'WILLAMAGOR',
    'Name': 'Williamson Magor & Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE210A01017'
  },
  {
    'Code': 'WINDLAS',
    'Name': 'Windlas Biotech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE0H5O01029'
  },
  {
    'Code': 'WINDMACHIN',
    'Name': 'Windsor Machines Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE052A01021'
  },
  {
    'Code': 'WINSOME',
    'Name': 'Winsome Yarns Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': null
  },
  {
    'Code': 'WIPL',
    'Name': 'The Western India Plywoods Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE215F01023'
  },
  {
    'Code': 'WIPRO',
    'Name': 'Wipro Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE075A01022'
  },
  {
    'Code': 'WOCKPHARMA',
    'Name': 'Wockhardt Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE049B01025'
  },
  {
    'Code': 'WONDERLA',
    'Name': 'Wonderla Holidays Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE066O01014'
  },
  {
    'Code': 'WORTH',
    'Name': 'Worth Peripherals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE196Y01018'
  },
  {
    'Code': 'WSI',
    'Name': 'W S Industries (I) Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE100D01014'
  },
  {
    'Code': 'WSTCSTPAPR',
    'Name': 'West Coast Paper Mills Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE976A01021'
  },
  {
    'Code': 'XCHANGING',
    'Name': 'Xchanging Solutions Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE692G01013'
  },
  {
    'Code': 'XELPMOC',
    'Name': 'Xelpmoc Design And Tech Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE01P501012'
  },
  {
    'Code': 'XPROINDIA',
    'Name': 'Xpro India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE445C01015'
  },
  {
    'Code': 'YAARI',
    'Name': 'Yaari Digital Integrated Services Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE126M01010'
  },
  {
    'Code': 'YESBANK',
    'Name': 'Yes Bank Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE528G01035'
  },
  {
    'Code': 'YUKEN',
    'Name': 'Yuken India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE384C01016'
  },
  {
    'Code': 'ZEEL',
    'Name': 'Zee Entertainment Enterprises Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE256A01028'
  },
  {
    'Code': 'ZEELEARN',
    'Name': 'Zee Learn Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE565L01011'
  },
  {
    'Code': 'ZEEMEDIA',
    'Name': 'Zee Media Corporation Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE966H01019'
  },
  {
    'Code': 'ZENITHEXPO',
    'Name': 'Zenith Exports Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE058B01018'
  },
  {
    'Code': 'ZENITHSTL',
    'Name': 'Zenith Steel Pipes & Industries Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE318D01020'
  },
  {
    'Code': 'ZENSARTECH',
    'Name': 'Zensar Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE520A01027'
  },
  {
    'Code': 'ZENTEC',
    'Name': 'Zen Technologies Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE251B01027'
  },
  {
    'Code': 'ZFCVINDIA',
    'Name': 'ZF Commercial Vehicle Control Systems India Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE342J01019'
  },
  {
    'Code': 'ZICOM',
    'Name': 'Zicom Electronic Security Systems Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE871B01014'
  },
  {
    'Code': 'ZIMLAB',
    'Name': 'Zim Laboratories Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE518E01015'
  },
  {
    'Code': 'ZODIAC',
    'Name': 'Zodiac Energy Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE761Y01019'
  },
  {
    'Code': 'ZODIACLOTH',
    'Name': 'Zodiac Clothing Company Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE206B01013'
  },
  {
    'Code': 'ZOMATO',
    'Name': 'Zomato Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE758T01015'
  },
  {
    'Code': 'ZOTA',
    'Name': 'Zota Health Care LImited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE358U01012'
  },
  {
    'Code': 'ZUARI',
    'Name': 'Zuari Agro Chemicals Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE840M01016'
  },
  {
    'Code': 'ZUARIIND',
    'Name': 'ZUARI INDUSTRIES LIMITED',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE217A01012'
  },
  {
    'Code': 'ZYDUSLIFE',
    'Name': 'Zydus Lifesciences Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE010B01027'
  },
  {
    'Code': 'ZYDUSWELL',
    'Name': 'Zydus Wellness Limited',
    'Country': 'India',
    'Exchange': 'NSE',
    'Currency': 'INR',
    'Type': 'Common Stock',
    'Isin': 'INE768C01010'
  }
];

export async function GET(request: NextRequest) {

  const t_0 = performance.now();

  const { searchParams } = new URL(request.url);
  let query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({
      data: [],
      status: 200
    });
  }

  const search_term = query.trim().toLowerCase();

  const code_search = tickers.filter(ticker => ticker.Code.toLowerCase().includes(search_term));
  const name_search = tickers.filter(ticker => ticker.Name.toLowerCase().includes(search_term));

  const results = new Set([...code_search, ...name_search]);

  const results_array = [...results];

  const t_1 = performance.now();

  return NextResponse.json({
    matches: results_array.length,
    time: (t_1 - t_0).toFixed(3) + 'ms',
    data: results_array.slice(0, 10),
    status: 200
  });
}
