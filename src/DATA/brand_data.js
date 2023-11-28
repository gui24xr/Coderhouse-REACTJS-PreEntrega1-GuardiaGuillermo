const DATA_BRANDS = [
  { brand: "agv", brandImg: 'https://imgs.search.brave.com/0HpOMK6Z07Rc8SIQ9H-3sCF4_x7p8wsmByp4IV1GjcM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93dzIu/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMC9h/Z3YtbG9nby5wbmc_/bG9zc3k9MSZyZXNp/emU9NDAwLDQwMCZz/c2w9MQ' },
  { brand: "shoei", brandImg: 'https://imgs.search.brave.com/F013rrBPC357nintzF4hX57i_cCnSdY2B7lInbie3Rg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/c2hvZWkuc3Zn.svg' },
  { brand: "arai", brandImg: 'https://imgs.search.brave.com/Q1UDqQHzvsMdS_G0fGKGUs6VuGxcm0RKNOV17czVDVI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2QzL0FyYWlfSGVs/bWV0X2NvbXBhbnlf/bG9nby5zdmc.svg' },
  { brand: "hjc", brandImg: 'https://imgs.search.brave.com/EX1jqKkhbOUJbOqWqvBMkXvWv9eItSAK9woGqZAgDHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hbGx2/ZWN0b3Jsb2dvLmNv/bS9pbWcvMjAxNi8x/Mi9oamMtaGVsbWV0/cy1sb2dvLnBuZw' },
  { brand: "x-lite", brandImg: 'https://imgs.search.brave.com/xGSlXdZP1ZdgFsx68DPK5niE3LS0KHbmqyXGaSiwgEE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1gveC1saXRl/LWxvZ28tMDFDNEJG/MTQ5Ri1zZWVrbG9n/by5jb20ucG5n' },
  { brand: "shark", brandImg: 'https://imgs.search.brave.com/BIiT52D9ycOzybuNbwI0DYU30r8zBBTVniDUNTP6EXc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc2hhcmst/aGVsbWV0cy1sb2dv/LUUyOEUzQkRGRUQt/c2Vla2xvZ28uY29t/LnBuZw' },
  { brand: "bell", brandImg: 'https://imgs.search.brave.com/fXOdYYNpYrdwzD_DmzSo0kbPiHjDpY1G_kdCH52iiAs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9iZWxsLWhlbG1l/dHMtMS5zdmc.svg' },
  { brand: "nolan", brandImg: 'https://imgs.search.brave.com/YMDgd_mvveoAJujqhhZk2RJpKnZPfXgyaUPl17yGPu4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vTm9sYW4t/bG9nby0xQjE3Q0JD/NjMxLXNlZWtsb2dv/LmNvbS5wbmc' },
  { brand: "ls2", brandImg: 'https://imgs.search.brave.com/6pa9OShkGwTXKgIQI3Nale5U9F0g7HJOQ8LaWbtOH_A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RpY2tlcnMtZmFj/dG9yeS5jb20vbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0L2NhY2hl/LzEvaW1hZ2UvMzYz/eC8wNDBlYzA5YjFl/MzVkZjEzOTQzMzg4/N2E5N2RhYTY2Zi8w/LzEvMDE2NDZfMDAu/cG5n' },
  { brand: "nitro", brandImg: 'https://imgs.search.brave.com/X0KIVUr_xZ6TaFmGGJh3h2Xbh2z9WSrKHiFiQP7_j70/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNhc3F1ZS5jby51/ay9pbWFnZXMvYWNj/ZXNzb2lyZXMvdmlz/aWVyZS92aXNpZXJl/LW5pdHJvLWR5bmFt/by1zMy5qcGc' },
  { brand: "rjays", brandImg: 'https://imgs.search.brave.com/TqefaD__9yzbg2L1XOr0F4ahOwPmtb3M8-Yi5LVt778/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWFzeXIuY29tLmF1/L2Fzc2V0cy90aGVt/ZXMvcmFwaWQtcmVk/dWNlZC1maWx0ZXJz/LWpzLWZpbHRlci9p/bWcvaGVhZGVyL3Jq/YXlzLnBuZw' },
  { brand: "airoh", brandImg: 'https://imgs.search.brave.com/PGgbiR_uJRsNWlNiPuyWSXbmNQcTefuzqdJR3GvxVPA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3ZlY3Rvci5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMTMv/MDcvYWlyb2gtdmVj/dG9yLWxvZ28ucG5n' },
  { brand: "oneal", brandImg: 'https://imgs.search.brave.com/xeYLjmu-YlN8E_PI7idNLBjO03SYVIBwpYaHGrxHHZc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/NC9vbmVhbC1yYWNp/bmctdmVjdG9yLWxv/Z28tNDAweDQwMC5w/bmc'},
  { brand: "scorpion", brandImg: 'https://imgs.search.brave.com/gZN3We7immiGr-6naB55A_Ssi5hwEwdUVSnMmKUurS4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Njb3Jw/aW9uLWV4bzc0NTIu/bG9nb3dpay5jb20u/d2VicA' },
  { brand: "merlin", brandImg: 'https://imgs.search.brave.com/1uRtpZDhaWATuGUgmSce02HQ16rwainzuNl7JGR_N2E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vbWVybGlu/bW90b3JjeWNsZXNv/bmxpbmUuY28udWsv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvTmV3TG9nb1Yy/LnBuZz9maXQ9NTAw/LDMyNSZzc2w9MQ' },
  { brand: "ixon", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/LOGO/ixon%20logo-100x50.png' },
  { brand: "macna", brandImg: 'https://imgs.search.brave.com/IdPINo0FcbFRnm7ML7JEiNF6ArcE8EM3gNqOrThXeCU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bW90b2xlZ2VuZHMu/Y29tL0ltYWdlcy9N/ZW51SW1hZ2UvYnJh/bmRfbWFjbmFfbmF2/LnBuZw' },
  { brand: "alpinestars", brandImg: 'https://imgs.search.brave.com/wqCqPr7LXzc4s8mP5o686tmCS7054OttDozcNUiQSdw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNiL0FscGluZXN0/YXJzX0xvZ28uc3Zn.svg' },
  { brand: "dainese", brandImg: 'https://imgs.search.brave.com/NC4hRoKcPi3oaV5d0EKfJi8R8aeUdKyK8NlCr-A0Ub0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlibG9nby5jb20v/aW1nLWxvZ28vZGEz/ODQ4ZDY4ZS1kYWlu/ZXNlLWxvZ28tZGFp/bmVzZS1sb2dvLWxv/Z28tZGFpbmVzZS1s/b2dvcy5wbmc' },
  { brand: "dririder", brandImg: 'https://imgs.search.brave.com/WMR8Mg6i-ey8apMiP3inDsaPvmzs8VCHHiSu3tNivUw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHJpcmlkZXIuY29t/LmF1L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA2L0RyaXJp/ZGVyX0xvZ29fNF9P/bl9UcmFuc3BhcmVu/dC5wbmc' },
  { brand: "five", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/manufacturers/124-Dririder-100x50.jpg' },
  { brand: "rst", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/manufacturers/fd8b0f77d767f1f6640afba6916ff67c_XL-100x50.jpg' },
  { brand: "argon", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/LOGO/argon%20logo-100x50.png' },
  { brand: "oxford", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/OXFORD/oxford%20logo-100x50.png' },
  { brand: "bull-it", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/LOGO/bull-it-jean-logo-100x50.png' },
  { brand: "tcx", brandImg: 'https://imgs.search.brave.com/VYuqgDCfPjBO04I6oGU4hZZBwI-qS4BTCoq6gZ0jwb0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaHJw/ZXJmb3JtYW5jZS5j/b20vaW1hZ2VzL1Qx/OTgxMDgyNjg.jpeg' },
  { brand: "nelson-rigg", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/manufacturers/nelson-rigg-red-800-100x50.png' },
  { brand: "ogio", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/LOGO/OGIO_Logo-100x50.jpg' },
  { brand: "bagster", brandImg: 'https://www.thehelmetwarehouse.com.au/image/cache/catalog/LOGO/BAGSTER-LOGO-100x50.png' },
  { brand: "n100.5", brandImg: 'https://imgs.search.brave.com/YMDgd_mvveoAJujqhhZk2RJpKnZPfXgyaUPl17yGPu4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vTm9sYW4t/bG9nby0xQjE3Q0JD/NjMxLXNlZWtsb2dv/LmNvbS5wbmc' },
  { brand: "fog", brandImg: 'https://imgs.search.brave.com/Rki6ZUdDRZ9w4ojn98uqOQBQM4ljqa0SuN5ieQ-wZ7Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDA5LzYx/OS85Nzgvbm9uXzJ4/L2Zvdi10cmlhbmds/ZS1sZXR0ZXItbG9n/by1kZXNpZ24td2l0/aC10cmlhbmdsZS1z/aGFwZS1mb3YtdHJp/YW5nbGUtbG9nby1k/ZXNpZ24tbW9ub2dy/YW0tZm92LXRyaWFu/Z2xlLWxvZ28tdGVt/cGxhdGUtd2l0aC1y/ZWQtY29sb3ItZm92/LXRyaWFuZ3VsYXIt/bG9nby1zaW1wbGUt/ZWxlZ2FudC1hbmQt/bHV4dXJpb3VzLWxv/Z28tdmVjdG9yLmpw/Zw' },
];




export  default DATA_BRANDS