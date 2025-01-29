import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ParamService {
    functions: any = [
        {
            title: 'Functional',
        },
        {
            title: 'Non-Functional',
        }

    ]
    zones: any = [{
        "id": "1",
        "title": "Zone 1"
    },
    {
        "id": "2",
        "title": "Zone 2"
    },
    {
        "id": "3",
        "title": "Zone 3"
    }]
    residence: any = [{
        "id": "1",
        "title": "Urban"
    },
    {
        "id": "2",
        "title": "Rural"
    }]
    ownership: any = [
        // { title: "All", id: "" },
        { title: "Private", id: "1" },
        { title: "Government - Public", id: "2" },
        { title: "Faith Based Organisation", id: "3" },
        { title: "Government - Not Public (Military, etc)", id: "4" },
        { title: "NGO", id: "5" },
        { title: "Community", id: "6" },

    ]

    lgas:any =  [
        {
            "id": "1",
            "title": "Birnin Gwari",
            "ZoneID": "Zone 2",
            "population": 258581
        },
        {
            "id": "2",
            "title": "Chikun",
            "ZoneID": "Zone 2",
            "population": 372272
        },
        {
            "id": "3",
            "title": "Giwa",
            "ZoneID": "Zone 2",
            "population": 292384
        },
        {
            "id": "4",
            "title": "Igabi",
            "ZoneID": "Zone 2",
            "population": 430753
        },
        {
            "id": "5",
            "title": "Ikara",
            "ZoneID": "Zone 1",
            "population": 194723
        },
        {
            "id": "6",
            "title": "Jaba",
            "ZoneID": "Zone 3",
            "population": 155973
        },
        {
            "id": "7",
            "title": "Jemaa",
            "ZoneID": "Zone 3",
            "population": 278202
        },
        {
            "id": "8",
            "title": "Kachia",
            "ZoneID": "Zone 3",
            "population": 252568
        },
        {
            "id": "9",
            "title": "Kaduna North",
            "ZoneID": "Zone 2",
            "population": 364575
        },
        {
            "id": "10",
            "title": "Kaduna South",
            "ZoneID": "Zone 2",
            "population": 402731
        },
        {
            "id": "11",
            "title": "Kagarko",
            "ZoneID": "Zone 1",
            "population": 239058
        },
        {
            "id": "12",
            "title": "Kajuru",
            "ZoneID": "Zone 2",
            "population": 243647
        },
        {
            "id": "13",
            "title": "Kaura",
            "ZoneID": "Zone 1",
            "population": 244216
        },
        {
            "id": "14",
            "title": "Kauru",
            "ZoneID": "Zone 3",
            "population": 229255
        },
        {
            "id": "15",
            "title": "Kubau",
            "ZoneID": "Zone 1",
            "population": 282045
        },
        {
            "id": "16",
            "title": "Kudan",
            "ZoneID": "Zone 2",
            "population": 138956
        },
        {
            "id": "17",
            "title": "Lere",
            "ZoneID": "Zone 1",
            "population": 339740
        },
        {
            "id": "18",
            "title": "Makarfi",
            "ZoneID": "Zone 1",
            "population": 146574
        },
        {
            "id": "19",
            "title": "Sabon Gari",
            "ZoneID": "Zone 1",
            "population": 286871
        },
        {
            "id": "20",
            "title": "Sanga",
            "ZoneID": "Zone 3",
            "population": 151485
        },
        {
            "id": "21",
            "title": "Soba",
            "ZoneID": "Zone 2",
            "population": 290745
        },
        {
            "id": "22",
            "title": "Zango Kataf",
            "ZoneID": "Zone 3",
            "population": 318991
        },
        {
            "id": "23",
            "title": "Zaria",
            "ZoneID": "Zone 1",
            "population": 408198
        }
    ]

    wards: any = [

        {
            "id": 2,
            "title": "Dogondawa",
            "ward_code": 102,
            "short_code": "DOD",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 3,
            "title": "Gayam",
            "ward_code": 103,
            "short_code": "GAY",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 4,
            "title": "Kakangi",
            "ward_code": 104,
            "short_code": "KAK",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 5,
            "title": "Kutemeshi",
            "ward_code": 105,
            "short_code": "KUT",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 6,
            "title": "Kuyello",
            "ward_code": 106,
            "short_code": "KUY",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 7,
            "title": "Magajin Gari 1",
            "ward_code": 107,
            "short_code": "MGI",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 8,
            "title": "Magajin Gari 2",
            "ward_code": 108,
            "short_code": "MGII",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 9,
            "title": "Magajin Gari 3",
            "ward_code": 109,
            "short_code": "MGIII",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 10,
            "title": "Randagi",
            "ward_code": 1010,
            "short_code": "RAN",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 11,
            "title": "Tabanni",
            "ward_code": 1011,
            "short_code": "TAB",
            "lga_name": "Birnin Gwari",
            "zone": "Zone 2"
        },
        {
            "id": 12,
            "title": "Chikun",
            "ward_code": 201,
            "short_code": "CHI",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 13,
            "title": "Gwagwada",
            "ward_code": 202,
            "short_code": "GWA",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 14,
            "title": "Kakau",
            "ward_code": 203,
            "short_code": "KAK",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 15,
            "title": "Kujama",
            "ward_code": 204,
            "short_code": "KUJ",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 16,
            "title": "Kuriga",
            "ward_code": 205,
            "short_code": "KUR",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 17,
            "title": "Kunai",
            "ward_code": 206,
            "short_code": "KUN",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 18,
            "title": "Narayi",
            "ward_code": 207,
            "short_code": "NAR",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 19,
            "title": "Nassarawa Ward",
            "ward_code": 208,
            "short_code": "NAS",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 20,
            "title": "Rido",
            "ward_code": 209,
            "short_code": "RID",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 21,
            "title": "Sabon Gari North",
            "ward_code": 2010,
            "short_code": "SBN",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 22,
            "title": "Sabon Gari Nassarawa",
            "ward_code": 2011,
            "short_code": "SBNS",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 23,
            "title": "Sabon Tasha",
            "ward_code": 2012,
            "short_code": "SBT",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 24,
            "title": "Yelwa Ward",
            "ward_code": 2013,
            "short_code": "YEL",
            "lga_name": "Chikun",
            "zone": "Zone 2"
        },
        {
            "id": 25,
            "title": "Danmahawayi",
            "ward_code": 301,
            "short_code": "DANM",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 26,
            "title": "Galadimawa",
            "ward_code": 302,
            "short_code": "GAL",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 27,
            "title": "Gangara Ward",
            "ward_code": 303,
            "short_code": "GAN",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 28,
            "title": "Giwa",
            "ward_code": 304,
            "short_code": "GIW",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 29,
            "title": "Idasu",
            "ward_code": 305,
            "short_code": "IDA",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 30,
            "title": "Kakangi",
            "ward_code": 306,
            "short_code": "KAK",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 31,
            "title": "Kidandan",
            "ward_code": 307,
            "short_code": "KID",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 32,
            "title": "Panhauya",
            "ward_code": 308,
            "short_code": "PANH",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 33,
            "title": "Shika",
            "ward_code": 309,
            "short_code": "SHK",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 34,
            "title": "Wazata",
            "ward_code": 3010,
            "short_code": "WAZ",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 35,
            "title": "Yakawada",
            "ward_code": 3011,
            "short_code": "YAK",
            "lga_name": "Giwa",
            "zone": "Zone 2"
        },
        {
            "id": 36,
            "title": "Afaka",
            "ward_code": 401,
            "short_code": "AFK",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 37,
            "title": "Birnin Yero",
            "ward_code": 402,
            "short_code": "BRY",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 38,
            "title": "Gwaraji",
            "ward_code": 403,
            "short_code": "GWA",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 39,
            "title": "Igabi",
            "ward_code": 404,
            "short_code": "IGB",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 40,
            "title": "Kerawa",
            "ward_code": 405,
            "short_code": "KER",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 41,
            "title": "Kwarau",
            "ward_code": 406,
            "short_code": "KWA",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 42,
            "title": "Panshanu",
            "ward_code": 407,
            "short_code": "PAN",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 43,
            "title": "Rigachikun",
            "ward_code": 408,
            "short_code": "RIGC",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 44,
            "title": "Rigasa",
            "ward_code": 409,
            "short_code": "RIG",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 45,
            "title": "Sabon Birni Ward",
            "ward_code": 4010,
            "short_code": "SABN",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 46,
            "title": "Turunku",
            "ward_code": 4011,
            "short_code": "TUR",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 47,
            "title": "Zangon Aya",
            "ward_code": 4012,
            "short_code": "ZAY",
            "lga_name": "Igabi",
            "zone": "Zone 2"
        },
        {
            "id": 48,
            "title": "Auchan",
            "ward_code": 501,
            "short_code": "AUC",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 49,
            "title": "Ikara",
            "ward_code": 502,
            "short_code": "IKA",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 50,
            "title": "Jampalam",
            "ward_code": 503,
            "short_code": "JAM",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 51,
            "title": "Kurmin Kogi",
            "ward_code": 504,
            "short_code": "KUK",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 52,
            "title": "Kuya",
            "ward_code": 505,
            "short_code": "KUY",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 53,
            "title": "Paki",
            "ward_code": 506,
            "short_code": "PAK",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 54,
            "title": "Pala",
            "ward_code": 507,
            "short_code": "PAL",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 55,
            "title": "Rumi",
            "ward_code": 508,
            "short_code": "RUM",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 56,
            "title": "Saulawa",
            "ward_code": 509,
            "short_code": "SAU",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 57,
            "title": "Saya-Saya Ward",
            "ward_code": 5010,
            "short_code": "SAY",
            "lga_name": "Ikara",
            "zone": "Zone 1"
        },
        {
            "id": 58,
            "title": "Chori",
            "ward_code": 601,
            "short_code": "CHO",
            "lga_name": "jaba",
            "zone": "Zone 3"
        },
        {
            "id": 59,
            "title": "Daddu",
            "ward_code": 602,
            "short_code": "DAD",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 60,
            "title": "Dura Bitaro",
            "ward_code": 603,
            "short_code": "DUB",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 61,
            "title": "Fada",
            "ward_code": 604,
            "short_code": "FAD",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 62,
            "title": "Fai",
            "ward_code": 605,
            "short_code": "FAI",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 63,
            "title": "Nduya",
            "ward_code": 606,
            "short_code": "NDU",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 64,
            "title": "Nok",
            "ward_code": 607,
            "short_code": "NOK",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 65,
            "title": "Sabchem",
            "ward_code": 608,
            "short_code": "SABC",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 66,
            "title": "Sabzuro",
            "ward_code": 609,
            "short_code": "SABZ",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 67,
            "title": "Samban",
            "ward_code": 6010,
            "short_code": "SAM",
            "lga_name": "Jaba",
            "zone": "Zone 3"
        },
        {
            "id": 68,
            "title": "Asso",
            "ward_code": 701,
            "short_code": "ASS",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 69,
            "title": "Atuku",
            "ward_code": 702,
            "short_code": "ATU",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 70,
            "title": "Barde",
            "ward_code": 703,
            "short_code": "BAR",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 71,
            "title": "Gidan Waya",
            "ward_code": 704,
            "short_code": "GIDW",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 72,
            "title": "Godogodo",
            "ward_code": 705,
            "short_code": "GOD",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 73,
            "title": "Jagindi",
            "ward_code": 706,
            "short_code": "JAG",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 74,
            "title": "Kafanchan A",
            "ward_code": 707,
            "short_code": "KAFA",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 75,
            "title": "Kafanchan B",
            "ward_code": 708,
            "short_code": "KAFB",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 76,
            "title": "Kagoma",
            "ward_code": 709,
            "short_code": "KAG",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 77,
            "title": "Kaninkon",
            "ward_code": 7010,
            "short_code": "KAN",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 78,
            "title": "Maigizo",
            "ward_code": 7011,
            "short_code": "MAIG",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 79,
            "title": "Takau",
            "ward_code": 7012,
            "short_code": "TAK",
            "lga_name": "Jemaa",
            "zone": "Zone 3"
        },
        {
            "id": 80,
            "title": "Agunu",
            "ward_code": 801,
            "short_code": "AGU",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 81,
            "title": "Ankwa",
            "ward_code": 802,
            "short_code": "ANK",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 82,
            "title": "Awon",
            "ward_code": 803,
            "short_code": "AWN",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 83,
            "title": "Bishini",
            "ward_code": 804,
            "short_code": "BIS",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 84,
            "title": "Doka",
            "ward_code": 805,
            "short_code": "DOK",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 85,
            "title": "Gidan Tagwai",
            "ward_code": 806,
            "short_code": "GIDT",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 86,
            "title": "Gumel",
            "ward_code": 807,
            "short_code": "GUM",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 87,
            "title": "Kachia",
            "ward_code": 808,
            "short_code": "KAC",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 88,
            "title": "Katari",
            "ward_code": 809,
            "short_code": "KAT",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 89,
            "title": "Kurmin Musa",
            "ward_code": 8010,
            "short_code": "KUM",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 90,
            "title": "Kwaturu",
            "ward_code": 8011,
            "short_code": "KWA",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 91,
            "title": "Sabon Sarki",
            "ward_code": 8012,
            "short_code": "SAS",
            "lga_name": "Kachia",
            "zone": "Zone 3"
        },
        {
            "id": 92,
            "title": "Badarawa",
            "ward_code": 901,
            "short_code": "BAD",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 93,
            "title": "Dadi Riba",
            "ward_code": 902,
            "short_code": "DADR",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 94,
            "title": "Gabasawa",
            "ward_code": 903,
            "short_code": "GAB",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 95,
            "title": "Hayin Banki",
            "ward_code": 904,
            "short_code": "HAB",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 96,
            "title": "Kabala",
            "ward_code": 905,
            "short_code": "KAB",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 97,
            "title": "Kawo",
            "ward_code": 906,
            "short_code": "KAW",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 98,
            "title": "Maiburiji",
            "ward_code": 907,
            "short_code": "MAIB",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 99,
            "title": "Sardauna",
            "ward_code": 908,
            "short_code": "SAD",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 100,
            "title": "Shaba",
            "ward_code": 909,
            "short_code": "SHA",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 101,
            "title": "Unguwan Dosa",
            "ward_code": 9010,
            "short_code": "UND",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 102,
            "title": "Unguwar Sarki",
            "ward_code": 9012,
            "short_code": "UNS",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 103,
            "title": "Unguwar Shanu",
            "ward_code": 9013,
            "short_code": "UNSH",
            "lga_name": "Kaduna North",
            "zone": "Zone 2"
        },
        {
            "id": 104,
            "title": "Badiko",
            "ward_code": 1001,
            "short_code": "BAD",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 105,
            "title": "Barnawa",
            "ward_code": 1002,
            "short_code": "BAR",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 106,
            "title": "Kakuri Gwari",
            "ward_code": 1003,
            "short_code": "KKG",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 107,
            "title": "Kakuri Hausa",
            "ward_code": 1004,
            "short_code": "KKH",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 108,
            "title": "Makera",
            "ward_code": 1005,
            "short_code": "MAK",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 109,
            "title": "Sabon Gari North",
            "ward_code": 1006,
            "short_code": "SGN",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 110,
            "title": "Sabon Gari South",
            "ward_code": 1007,
            "short_code": "SGS",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 111,
            "title": "Sabon Gari West",
            "ward_code": 1008,
            "short_code": "SGW",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 112,
            "title": "Television",
            "ward_code": 1009,
            "short_code": "TV",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 113,
            "title": "Tudun Nupawa",
            "ward_code": 10010,
            "short_code": "TUDNP",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 114,
            "title": "Tudun Wada North",
            "ward_code": 10011,
            "short_code": "TUDN",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 115,
            "title": "Tudun Wada South",
            "ward_code": 10012,
            "short_code": "TUDS",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 116,
            "title": "Unguwan Sanusi",
            "ward_code": 10013,
            "short_code": "UNGS",
            "lga_name": "Kaduna South",
            "zone": "Zone 2"
        },
        {
            "id": 117,
            "title": "Aribi",
            "ward_code": 1101,
            "short_code": "ARI",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 118,
            "title": "Iddah",
            "ward_code": 1102,
            "short_code": "IDD",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 119,
            "title": "Jere North",
            "ward_code": 1103,
            "short_code": "JER",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 120,
            "title": "Jere South",
            "ward_code": 1104,
            "short_code": "JERS",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 121,
            "title": "Kagarko North",
            "ward_code": 1105,
            "short_code": "KAGN",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 122,
            "title": "Kagarko South",
            "ward_code": 1106,
            "short_code": "KAGS",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 123,
            "title": "Katugal",
            "ward_code": 1107,
            "short_code": "KAT",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 124,
            "title": "Kukuyi",
            "ward_code": 1108,
            "short_code": "KKU",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 125,
            "title": "Kurmin Jibrin",
            "ward_code": 1109,
            "short_code": "KURMJ",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 126,
            "title": "Kushe",
            "ward_code": 11010,
            "short_code": "KUS",
            "lga_name": "Kagarko",
            "zone": "Zone 3"
        },
        {
            "id": 127,
            "title": "Buda",
            "ward_code": 1202,
            "short_code": "BUD",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 128,
            "title": "Idon",
            "ward_code": 1203,
            "short_code": "IDN",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 129,
            "title": "Kajuru",
            "ward_code": 1204,
            "short_code": "KAJ",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 130,
            "title": "Kallah",
            "ward_code": 1205,
            "short_code": "KAL",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 131,
            "title": "Kasuwan Magani",
            "ward_code": 1206,
            "short_code": "KASM",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 132,
            "title": "Kufana",
            "ward_code": 1207,
            "short_code": "KUF",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 133,
            "title": "Maro",
            "ward_code": 1208,
            "short_code": "MAR",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 134,
            "title": "Rimau",
            "ward_code": 1209,
            "short_code": "RIM",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 135,
            "title": "Tantattu",
            "ward_code": 12010,
            "short_code": "TAN",
            "lga_name": "Kajuru",
            "zone": "Zone 2"
        },
        {
            "id": 136,
            "title": "Agban",
            "ward_code": 1301,
            "short_code": "AGB",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 137,
            "title": "Bondong",
            "ward_code": 1302,
            "short_code": "BON",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 138,
            "title": "Fada",
            "ward_code": 1303,
            "short_code": "FAD",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 139,
            "title": "Kadarko",
            "ward_code": 1304,
            "short_code": "KAD",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 140,
            "title": "Kaura",
            "ward_code": 1305,
            "short_code": "KAU",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 141,
            "title": "Kpak",
            "ward_code": 1306,
            "short_code": "KPK",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 142,
            "title": "Kukum",
            "ward_code": 1307,
            "short_code": "KKM",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 143,
            "title": "Malagum",
            "ward_code": 1308,
            "short_code": "MAL",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 144,
            "title": "Manchok",
            "ward_code": 1309,
            "short_code": "MAN",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 145,
            "title": "Zankan",
            "ward_code": 13010,
            "short_code": "ZAN",
            "lga_name": "Kaura",
            "zone": "Zone 3"
        },
        {
            "id": 146,
            "title": "Badurum",
            "ward_code": 1401,
            "short_code": "BAD",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 147,
            "title": "Bital",
            "ward_code": 1402,
            "short_code": "BTL",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 148,
            "title": "Damakasuwa",
            "ward_code": 1403,
            "short_code": "DMKS",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 149,
            "title": "Dawaki",
            "ward_code": 1404,
            "short_code": "DWK",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 150,
            "title": "Geshere",
            "ward_code": 1405,
            "short_code": "GES",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 151,
            "title": "Kamaru",
            "ward_code": 1406,
            "short_code": "KAM",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 152,
            "title": "Kauru East",
            "ward_code": 1407,
            "short_code": "KAUE",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 153,
            "title": "Kauru West",
            "ward_code": 1408,
            "short_code": "KAUW",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 154,
            "title": "Kwassam",
            "ward_code": 1409,
            "short_code": "KWA",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 155,
            "title": "Makami",
            "ward_code": 14010,
            "short_code": "MAK",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 156,
            "title": "Pari",
            "ward_code": 14011,
            "short_code": "PAR",
            "lga_name": "Kauru",
            "zone": "Zone 3"
        },
        {
            "id": 157,
            "title": "Anchau",
            "ward_code": 1501,
            "short_code": "ANC",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 158,
            "title": "Damau",
            "ward_code": 1502,
            "short_code": "DAM",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 159,
            "title": "Dutsen Wai",
            "ward_code": 1503,
            "short_code": "DSW",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 160,
            "title": "Haskiya",
            "ward_code": 1504,
            "short_code": "HYA",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 161,
            "title": "Kargi",
            "ward_code": 1505,
            "short_code": "KAR",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 162,
            "title": "Karreh",
            "ward_code": 1506,
            "short_code": "KAR",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 163,
            "title": "Kubau",
            "ward_code": 1507,
            "short_code": "KUB",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 164,
            "title": "Mah",
            "ward_code": 1508,
            "short_code": "MAH",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 165,
            "title": "Pambegua",
            "ward_code": 1509,
            "short_code": "PAM",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 166,
            "title": "Zabi",
            "ward_code": 15010,
            "short_code": "ZAB",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 167,
            "title": "Zuntu",
            "ward_code": 15011,
            "short_code": "ZUN",
            "lga_name": "Kubau",
            "zone": "Zone 1"
        },
        {
            "id": 168,
            "title": "Doka",
            "ward_code": 1601,
            "short_code": "DKA",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 169,
            "title": "Garu",
            "ward_code": 1602,
            "short_code": "GAR",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 170,
            "title": "Hunkuyi",
            "ward_code": 1603,
            "short_code": "HKY",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 171,
            "title": "Kauran Wali North",
            "ward_code": 1604,
            "short_code": "KWN",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 172,
            "title": "Kauran Wali South",
            "ward_code": 1605,
            "short_code": "KWS",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 173,
            "title": "Kudan",
            "ward_code": 1606,
            "short_code": "KDN",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 174,
            "title": "Likoro",
            "ward_code": 1607,
            "short_code": "LIK",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 175,
            "title": "Sabon Gari",
            "ward_code": 1608,
            "short_code": "SBG",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 176,
            "title": "Taba",
            "ward_code": 1609,
            "short_code": "TAB",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 177,
            "title": "Zabi",
            "ward_code": 16010,
            "short_code": "ZAB",
            "lga_name": "Kudan",
            "zone": "Zone 1"
        },
        {
            "id": 178,
            "title": "Abadawa",
            "ward_code": 1701,
            "short_code": "ABD",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 179,
            "title": "Dan Alhaji",
            "ward_code": 1702,
            "short_code": "DALHJ",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 180,
            "title": "Garu Mariri",
            "ward_code": 1703,
            "short_code": "GMAR",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 181,
            "title": "Gure Kahugu",
            "ward_code": 1704,
            "short_code": "GKAH",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 182,
            "title": "Kayarda",
            "ward_code": 1705,
            "short_code": "KYD",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 183,
            "title": "Kudaru",
            "ward_code": 1706,
            "short_code": "KUD",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 184,
            "title": "Lazuru Tuddai",
            "ward_code": 1707,
            "short_code": "LAT",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 185,
            "title": "Lere",
            "ward_code": 1708,
            "short_code": "LER",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 186,
            "title": "Raminkura",
            "ward_code": 1709,
            "short_code": "RKR",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 187,
            "title": "Sabon Birnin",
            "ward_code": 17010,
            "short_code": "SBN",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 188,
            "title": "Saminaka",
            "ward_code": 17011,
            "short_code": "SMNK",
            "lga_name": "Lere",
            "zone": "Zone 1"
        },
        {
            "id": 189,
            "title": "Dandamisa",
            "ward_code": 1801,
            "short_code": "DDSA",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 190,
            "title": "Danguziri",
            "ward_code": 1802,
            "short_code": "DGZR",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 191,
            "title": "Gazara",
            "ward_code": 1803,
            "short_code": "GAZ",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 192,
            "title": "Gimi",
            "ward_code": 1804,
            "short_code": "GIM",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 193,
            "title": "Gubuchi",
            "ward_code": 1805,
            "short_code": "GCH",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 194,
            "title": "Gwanki",
            "ward_code": 1806,
            "short_code": "GWA",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 195,
            "title": "Makarfi",
            "ward_code": 1807,
            "short_code": "MKF",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 196,
            "title": "Meyari",
            "ward_code": 1808,
            "short_code": "MEY",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 197,
            "title": "Nassarawan Doya",
            "ward_code": 1809,
            "short_code": "NSRDY",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 198,
            "title": "Tudun Wada",
            "ward_code": 18010,
            "short_code": "TDW",
            "lga_name": "Makarfi",
            "zone": "Zone 1"
        },
        {
            "id": 199,
            "title": "Basawa",
            "ward_code": 1901,
            "short_code": "BAS",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 200,
            "title": "Bomo",
            "ward_code": 1902,
            "short_code": "BOM",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 201,
            "title": "Chikaji",
            "ward_code": 1903,
            "short_code": "CHL",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 202,
            "title": "Dogarawa",
            "ward_code": 1904,
            "short_code": "DGR",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 203,
            "title": "Hanwa",
            "ward_code": 1905,
            "short_code": "HNW",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 204,
            "title": "Jama'a",
            "ward_code": 1906,
            "short_code": "JAM",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 205,
            "title": "Jushi",
            "ward_code": 1907,
            "short_code": "JUS",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 206,
            "title": "Muchiya",
            "ward_code": 1908,
            "short_code": "MUC",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 207,
            "title": "Samaru",
            "ward_code": 1909,
            "short_code": "SAM",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 208,
            "title": "Unguwar Gabas",
            "ward_code": 19010,
            "short_code": "UGS",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 209,
            "title": "Zabi",
            "ward_code": 19011,
            "short_code": "ZAB",
            "lga_name": "Sabon Gari",
            "zone": "Zone 1"
        },
        {
            "id": 210,
            "title": "Aboro",
            "ward_code": 2001,
            "short_code": "ABO",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 211,
            "title": "Arak",
            "ward_code": 2002,
            "short_code": "ARK",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 212,
            "title": "Ayu",
            "ward_code": 2003,
            "short_code": "AYU",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 213,
            "title": "Bokana",
            "ward_code": 2004,
            "short_code": "BOK",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 214,
            "title": "Gwantu",
            "ward_code": 2005,
            "short_code": "GWT",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 215,
            "title": "Karshi",
            "ward_code": 2006,
            "short_code": "KSH",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 216,
            "title": "Nandu",
            "ward_code": 2007,
            "short_code": "NAN",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 217,
            "title": "Ninzo North",
            "ward_code": 2008,
            "short_code": "NIN",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 218,
            "title": "Ninzo South",
            "ward_code": 2009,
            "short_code": "NIS",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 219,
            "title": "Ninzo West",
            "ward_code": 20010,
            "short_code": "NIW",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 220,
            "title": "Wasa",
            "ward_code": 20011,
            "short_code": "WAS",
            "lga_name": "Sanga",
            "zone": "Zone 3"
        },
        {
            "id": 221,
            "title": "Danwata",
            "ward_code": 2101,
            "short_code": "DWT",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 222,
            "title": "Gamagira",
            "ward_code": 2102,
            "short_code": "GGR",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 223,
            "title": "Garu",
            "ward_code": 2103,
            "short_code": "GAR",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 224,
            "title": "Gimba",
            "ward_code": 2104,
            "short_code": "GIM",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 225,
            "title": "Kinkiba",
            "ward_code": 2105,
            "short_code": "KKB",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 226,
            "title": "Kwasallo",
            "ward_code": 2106,
            "short_code": "KWL",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 227,
            "title": "Maigana",
            "ward_code": 2107,
            "short_code": "MGN",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 228,
            "title": "Rahama",
            "ward_code": 2108,
            "short_code": "RHM",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 229,
            "title": "Richifa",
            "ward_code": 2109,
            "short_code": "RCF",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 230,
            "title": "Soba",
            "ward_code": 21010,
            "short_code": "SBA",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 231,
            "title": "Turawa",
            "ward_code": 21011,
            "short_code": "TRW",
            "lga_name": "Soba",
            "zone": "Zone 1"
        },
        {
            "id": 232,
            "title": "Gidan Jatau",
            "ward_code": 2201,
            "short_code": "GJT",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 233,
            "title": "Gora",
            "ward_code": 2202,
            "short_code": "GRA",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 234,
            "title": "Ikulu",
            "ward_code": 2203,
            "short_code": "IKL",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 235,
            "title": "Kamantan",
            "ward_code": 2204,
            "short_code": "KMT",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 236,
            "title": "Madakiya",
            "ward_code": 2205,
            "short_code": "MDK",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 237,
            "title": "Unguwan Gaiya",
            "ward_code": 2206,
            "short_code": "UGY",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 238,
            "title": "Unguwan Rimi",
            "ward_code": 2207,
            "short_code": "UGR",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 239,
            "title": "Zaman Dabo",
            "ward_code": 2208,
            "short_code": "ZDB",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 240,
            "title": "Zonkwa",
            "ward_code": 22010,
            "short_code": "ZKW",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 241,
            "title": "Zonzon",
            "ward_code": 22011,
            "short_code": "ZNZ",
            "lga_name": "Zango Kataf",
            "zone": "Zone 3"
        },
        {
            "id": 242,
            "title": "Dambo",
            "ward_code": 2301,
            "short_code": "DMB",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 243,
            "title": "Dutsen Abba",
            "ward_code": 2302,
            "short_code": "DSA",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 244,
            "title": "Gyellesu",
            "ward_code": 2303,
            "short_code": "GYA",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 245,
            "title": "Kaura",
            "ward_code": 2304,
            "short_code": "KAU",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 246,
            "title": "Kufena",
            "ward_code": 2305,
            "short_code": "KUF",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 247,
            "title": "Kwarbai A",
            "ward_code": 2306,
            "short_code": "KWRA",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 248,
            "title": "Kwarbai B",
            "ward_code": 2307,
            "short_code": "KWRB",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 249,
            "title": "Limancin Kona",
            "ward_code": 2308,
            "short_code": "LKN",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 250,
            "title": "Tudun Wada",
            "ward_code": 2309,
            "short_code": "TDW",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 251,
            "title": "Tukur Tukur",
            "ward_code": 23010,
            "short_code": "TKT",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 252,
            "title": "Unguwar Fatika",
            "ward_code": 23011,
            "short_code": "UNF",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 253,
            "title": "Unguwar Juma",
            "ward_code": 23012,
            "short_code": "UNJ",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        },
        {
            "id": 254,
            "title": "Wuciciri",
            "ward_code": 23013,
            "short_code": "WCR",
            "lga_name": "Zaria",
            "zone": "Zone 1"
        }
    ]

    facilityTypes: any = [

        { title: 'Chemist/Patent Medicine Store' },
        { title: 'Primary Healthcare Centre' },
        { title: 'Primary Healthcare Clinic' },
        { title: 'Health Clinic' },
        { title: 'Maternity And Child Health Clinic' },
        { title: 'Diagnostic Centre/Laboratory' },
        { title: 'Specialty Hospitals' },
        { title: 'General Hospital' },
        { title: 'Pharmacy' },
        { title: 'Private Hospital' },
        { title: 'Rural/Cottage Hospital' },
        { title: 'Health Clinic (Federal)' },
        { title: 'Teaching Hospital' },
        { title: 'General Hospital (Federal)' },
        { title: 'Youth Friendly Centre' },

    ]

    categories: any =[
        { id: "1", title: 'Clinical' },
        { id:"2", title: 'Non-Clinical' }
    ]
    constructor(private http: HttpClient) { }

    getAllParams() {
        return [
            { title: "Type of Facility", model: 'Facility Details: Selection of the type of facility', options: this.facilityTypes },
            { title: "Residence", model: 'Facility Detail: 5c. Residence of Facility', options: this.residence },
            { title: "Managing Authority", model: 'Facility Details: Selection of the Type of Managing Authority of health facility', options: this.ownership },
            { title: "Category", model: 'category', options: this.categories },
            { title: "Functionality", model: 'status', options: this.functions },
            { title: "Zone", model: 'Geographical Details: Selection of Senatorial Zone', options: this.zones },
            //   { title: "LGA", model:'Geographical Details: Selection of LGA',  options: this.lgas},
            //   { title: "Ward", model:'Geographical Details: Selection of Ward Name',  options: this.wards},
        ]
    }

    filterByZones() {

    }
    filterByLGA() {

    }
}
