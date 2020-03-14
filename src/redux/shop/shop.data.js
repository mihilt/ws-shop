const SHOP_DATA = [
    {
        id: 1,
        title: '의류',
        routeName: 'cloth',
        items: [
            {
                id: 'cloth_1',
                name: '무스탕',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_114949-1.jpg?w=1100',
                price: 59800
            },
            {
                id: 'cloth_2',
                name: '깔깔이',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_115125.jpg?w=1100',
                price: 39800
            },
            {
                id: 'cloth_3',
                name: '땡땡이 모자',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_115440.jpg?w=1100',
                price: 29800
            },
            {
                id: 'cloth_4',
                name: '흰 모자',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_115526.jpg?w=1100',
                price: 29800
            },
            {
                id: 'cloth_5',
                name: '건빵 모자',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_115631.jpg?w=1100',
                price: 29800
            },
            {
                id: 'cloth_6',
                name: '빨간 모자',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120400.jpg?w=1100',
                price: 24800
            },
            {
                id: 'cloth_7',
                name: '등산 모자',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120423.jpg?w=1100',
                price: 29800
            },
            {
                id: 'cloth_8',
                name: '전역모',
                imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_121821.jpg?w=1100',
                price: 58900
            }
        ]
    },
    {
      id: 2,
      title: '전자기기',
      routeName: 'electronic',
      items: [
        {
          id: 'electronic_1',
          name: '블루투스 스피커',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_163736.jpg?w=1100',
          price: 29800
        },
        {
          id: 'electronic_2',
          name: '보조배터리',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120840.jpg?w=1100',
          price: 24800
        },
        {
          id: 'electronic_3',
          name: '아이패드 미니4',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_165503.jpg?w=1100',
          price: 359800
        }
        ,
        {
          id: 'electronic_4',
          name: '와콤 뱀부펀 타블렛',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_164145.jpg?w=1100',
          price: 249800
        }
        ,
        {
          id: 'electronic_5',
          name: '온열 안대',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_164355.jpg?w=1100',
          price: 39800
        }
        ,
        {
          id: 'electronic_6',
          name: 'CCTV카메라',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_164340.jpg?w=1100',
          price: 89800
        }
      ]
    },
    {
      id: 3,
      title: '책',
      routeName: 'book',
      items: [
        {
          id: 'book_1',
          name: '김원식 2학년 일기장 컬렉션',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_164916.jpg?w=1100',
          price: 258000
        },
        {
          id: 'book_2',
          name: '꼼꼼이의 모험',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_172304.jpg?w=1100',
          price: 598000
        }
        ,
        {
          id: 'book_3',
          name: '컴퓨터구조론',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_172508.jpg?w=1100',
          price: 23800
        }
        ,
        {
          id: 'book_4',
          name: 'Absolute C++',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_172543.jpg?w=1100',
          price: 23800
        }
      ]
    },
    {
      id: 4,
      title: '식물',
      routeName: 'plant',
      items: [
        {
          id: 'plant_1',
          name: '테이블야자',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120711.jpg',
          price: 5800
        },
        {
          id: 'plant_2',
          name: '이오난사',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120741.jpg',
          price: 3800
        }
        ,
        {
          id: 'plant_3',
          name: '세로그라피카',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_172651.jpg?w=1100',
          price: 75800
        }
        ,
        {
          id: 'plant_4',
          name: 'Usneoides El Normal',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_172812.jpg?w=1100',
          price: 53800
        }
      ]
    },
    {
      id: 5,
      title: '기타',
      routeName: 'etc',
      items: [
        {
          id: 'etc_1',
          name: '지포 라이터',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_163958.jpg?w=1100',
          price: 119800
        },
        {
          id: 'etc_2',
          name: '수축튜브 세트',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_164445.jpg?w=1100',
          price: 12800
        },
        {
          id: 'etc_3',
          name: '영동초등학교 졸업CD',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_165207.jpg?w=1100',
          price: 12800
        }
        ,
        {
          id: 'etc_4',
          name: '자이로볼',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_165550.jpg?w=1100',
          price: 12800
        }
        ,
        {
          id: 'etc_5',
          name: '악력기',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_165432.jpg?w=1100',
          price: 19800
        }
        ,
        {
          id: 'etc_6',
          name: '만병통치약',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_163832.jpg?w=1100',
          price: 32800
        }
        ,
        {
          id: 'etc_7',
          name: '아령',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_163704.jpg?w=1100',
          price: 26800
        }
        ,
        {
          id: 'etc_8',
          name: '옴므원식 퍼퓸',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/edit-1.png?w=573',
          price: 49800
        }
        ,
        {
          id: 'etc_9',
          name: '물병',
          imageUrl: 'https://mihilthome.files.wordpress.com/2020/02/20200221_120625.jpg',
          price: 49800
        }
      ]
    }
]

export default SHOP_DATA;
