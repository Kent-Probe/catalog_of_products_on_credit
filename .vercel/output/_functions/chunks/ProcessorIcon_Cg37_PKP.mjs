import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro, e as renderScript, h as renderTransition } from './astro/server_BGds0R7D.mjs';
import 'kleur/colors';
import { $ as $$Favicon } from './Favicon_lk9hXLx-.mjs';
import 'clsx';
/* empty css                                 */
import { a as app } from './server_DFiT9_Sm.mjs';
import { getAuth } from 'firebase-admin/auth';
/* empty css                                 */

const $$LogoKent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="109" height="156" viewBox="0 0 109 156" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3641 81.6819C28.5531 80.9638 28.4775 80.2835 28.4775 78.9606C28.4397 77.6378 28.4397 75.6725 28.6287 73.9717C28.7799 72.2709 29.0822 70.8725 29.5358 69.4362C29.9893 68 30.5563 66.526 31.4633 64.8252C32.3704 63.1622 33.6177 61.2725 34.487 60.1008C35.3563 58.9291 35.8098 58.4378 36.4523 57.8709C37.1326 57.2662 37.9263 56.5858 38.7578 55.9811C39.5515 55.3386 40.3452 54.8095 41.3279 54.2803C42.3106 53.7134 43.52 53.1843 45.1452 52.6551C46.7704 52.126 48.8492 51.6347 50.7011 51.3323C52.5909 51.0299 54.2539 50.9165 56.0303 50.9543C57.8066 50.9921 59.6964 51.1433 61.057 51.3701C62.4177 51.5969 63.2114 51.8614 64.1563 52.1638C65.0633 52.4662 66.0838 52.8063 67.2177 53.3354C68.3515 53.8646 69.5988 54.5827 70.9216 55.5276C72.2066 56.4725 73.6051 57.6441 74.6255 58.6268C75.6838 59.6473 76.3641 60.441 76.8933 61.1969C77.4224 61.9528 77.8003 62.6331 78.2539 63.578C78.7074 64.485 79.2366 65.6567 79.6523 66.715C80.1059 67.7732 80.4838 68.7181 80.7106 69.5874C80.9751 70.4567 81.1263 71.2882 81.2397 72.2331C81.3531 73.1402 81.4287 74.1984 81.4287 75.3701C81.4287 76.5795 81.4287 77.8646 81.3909 78.8095C81.3531 79.7165 81.3531 80.2835 82.3358 81.8709C83.3185 83.4583 85.2838 86.1039 86.7956 88.1827C88.2696 90.2614 89.2523 91.8488 89.8192 93.0583C90.3862 94.3055 90.5374 95.2126 90.6507 96.3087C90.7263 97.4425 90.7641 98.7654 90.6885 100.05C90.6129 101.373 90.424 102.62 90.0838 103.868C89.7814 105.077 89.3279 106.287 88.7988 107.345C88.2318 108.403 87.5893 109.348 86.909 110.142C86.2287 110.973 85.5484 111.654 84.7925 112.334C84.0366 113.052 83.2051 113.732 82.2224 114.413C81.2775 115.093 80.1814 115.773 79.0476 116.378C77.9137 117.02 76.7421 117.55 75.4192 118.117C74.0586 118.646 72.5468 119.213 70.9594 119.666C69.372 120.12 67.6712 120.498 65.7814 120.838C63.9295 121.178 61.8507 121.48 59.0917 121.669C56.3326 121.82 52.8933 121.858 50.3232 121.783C47.7531 121.669 46.0523 121.443 44.2003 121.102C42.3484 120.724 40.383 120.271 38.8334 119.855C37.3216 119.439 36.2255 119.024 34.9027 118.494C33.6177 118.003 32.1437 117.361 30.7452 116.643C29.3468 115.924 28.0618 115.093 26.8901 114.224C25.7563 113.317 24.698 112.372 23.9043 111.427C23.0728 110.52 22.4681 109.613 21.8633 108.592C21.2586 107.534 20.6917 106.362 20.3137 105.417C19.898 104.51 19.6712 103.792 19.5578 102.923C19.4066 102.016 19.3311 100.92 19.3311 99.748C19.3311 98.5764 19.4066 97.4047 19.52 96.3843C19.6334 95.3638 19.8224 94.5323 20.2003 93.7008C20.5405 92.9071 21.0696 92.0756 21.6744 91.2063C22.2791 90.3748 22.9594 89.4677 23.6397 88.6362C24.32 87.8047 24.9626 87.0488 25.5673 86.2929C26.172 85.537 26.7389 84.7811 27.2303 84.0252C27.7216 83.2315 28.1751 82.4378 28.3641 81.6819Z" fill="url(#paint0_radial_35_281)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0161 26.841C11.0917 27.1433 11.2051 27.6724 11.4319 28.2394C11.6586 28.8441 11.9232 29.4488 12.339 30.2803C12.7547 31.074 13.3216 32.0945 14.0775 33.3795C14.8334 34.7024 15.8161 36.2898 17.1768 38.3685C18.4996 40.4095 20.2004 42.9417 21.6366 45.1717C23.0728 47.4016 24.2823 49.3291 25.2649 50.8787C26.2476 52.4661 26.9657 53.6756 27.6082 54.8095C28.2508 55.9811 28.7799 57.0394 29.1579 58.0599C29.5736 59.0803 29.8382 60.063 29.9138 60.9701C30.0271 61.8394 29.9516 62.6709 29.8004 63.5402C29.687 64.4095 29.4602 65.3921 29.1201 66.3748C28.8177 67.3953 28.4019 68.4158 27.835 69.474C27.2303 70.5323 26.4744 71.6284 25.6051 72.6488C24.7358 73.6315 23.7909 74.5008 22.6949 75.2567C21.5988 76.0126 20.3516 76.6551 19.1043 77.1087C17.8949 77.5244 16.6476 77.7512 15.476 77.789C14.3043 77.8646 13.1705 77.7512 11.9988 77.3732C10.8271 77.0331 8.40825 75.8992 8.29486 75.7858C8.14368 75.6724 7.84132 75.4457 7.42557 75.1055C6.97203 74.7276 6.3673 74.2362 5.76258 73.5181C5.15785 72.8 4.55313 71.9307 4.024 70.948C3.49486 70.0032 3.04132 68.9827 2.62557 67.8488C2.20982 66.715 1.83187 65.4677 1.64289 64.7118C1.41612 63.9181 1.34053 63.6158 1.22714 63.0488C1.07596 62.4819 0.924783 61.6882 0.773602 60.441C0.622421 59.1937 0.471239 57.5307 0.395649 55.7543C0.320058 53.978 0.282263 52.126 0.357854 50.3496C0.471239 48.5354 0.660216 46.7591 1.07596 44.7937C1.49171 42.7906 2.13423 40.5606 2.70116 38.8221C3.26809 37.0835 3.79722 35.8362 4.43974 34.589C5.08226 33.3417 5.87596 32.0567 6.66966 30.9606C7.50116 29.8268 8.33266 28.8441 9.05077 28.0882C9.76888 27.3701 10.3358 26.8032 10.6382 26.6142C10.9405 26.3874 10.9405 26.5008 10.9405 26.5386C10.9405 26.5764 10.9405 26.5764 11.0161 26.841Z" fill="url(#paint1_radial_35_281)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M92.6161 26.5764C92.6161 26.8788 92.5783 27.4079 92.465 28.0504C92.3516 28.6552 92.2004 29.2977 91.9358 30.2048C91.6335 31.0741 91.2933 32.1323 90.7642 33.5685C90.235 34.967 89.5169 36.7433 88.572 38.9733C87.6272 41.241 86.3799 44.0378 85.3594 46.4945C84.3012 48.9134 83.4319 51.03 82.7516 52.7307C82.0713 54.4315 81.5799 55.7922 81.1642 57.0016C80.7106 58.2489 80.3705 59.3827 80.1437 60.4788C79.9547 61.537 79.8791 62.5575 79.9169 63.4646C79.9925 64.3717 80.1815 65.1276 80.4838 65.9969C80.7862 66.8284 81.1642 67.7355 81.6555 68.6804C82.109 69.5874 82.7138 70.5323 83.4697 71.4772C84.2256 72.4221 85.1705 73.4048 86.1909 74.1985C87.2114 75.03 88.3075 75.7103 89.5169 76.2772C90.7264 76.8441 92.0492 77.2599 93.372 77.4867C94.6571 77.7134 95.9043 77.7134 97.076 77.5244C98.2476 77.3733 99.3437 77.0709 100.402 76.5418C101.498 75.9748 103.69 74.463 103.804 74.3118C103.917 74.1607 104.181 73.8961 104.522 73.4804C104.9 73.0268 105.391 72.4221 105.882 71.6284C106.374 70.8347 106.827 69.852 107.167 68.7937C107.545 67.7733 107.81 66.715 107.999 65.5055C108.226 64.3339 108.339 63.0111 108.452 62.2174C108.528 61.4237 108.528 61.1213 108.566 60.5544C108.604 59.9496 108.604 59.1181 108.566 57.8709C108.49 56.6237 108.339 54.9607 108.112 53.1843C107.885 51.4457 107.583 49.6315 107.167 47.8552C106.789 46.0788 106.26 44.4158 105.504 42.526C104.748 40.5985 103.766 38.5197 102.896 36.9323C102.027 35.3071 101.309 34.1733 100.478 33.0394C99.6083 31.9433 98.6256 30.8095 97.6051 29.8646C96.6224 28.9197 95.6398 28.0882 94.7705 27.4835C93.939 26.841 93.2964 26.4252 92.9563 26.2741C92.6161 26.1229 92.6539 26.1985 92.6539 26.2741C92.6539 26.3118 92.6539 26.3118 92.6161 26.5764Z" fill="url(#paint2_radial_35_281)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M42.4995 1.02679C42.5373 1.29136 42.5373 1.85829 42.6129 2.46301C42.6885 3.06774 42.8019 3.74805 43.0287 4.65514C43.2555 5.52443 43.5578 6.62049 44.0114 8.05671C44.5027 9.53073 45.0696 11.3071 45.9389 13.6126C46.7704 15.9181 47.8287 18.7528 48.7358 21.2473C49.6806 23.7418 50.3988 25.8961 51.0035 27.6347C51.6082 29.3732 52.024 30.7339 52.4019 32.0189C52.7421 33.2662 53.0444 34.4 53.1956 35.4961C53.3468 36.5921 53.3846 37.6126 53.2712 38.5197C53.1578 39.389 52.931 40.1449 52.5909 40.9764C52.2507 41.8079 51.835 42.715 51.3058 43.6221C50.7767 44.5292 50.1342 45.4362 49.3405 46.3433C48.509 47.2504 47.4885 48.1197 46.4303 48.9134C45.372 49.6693 44.2759 50.3118 43.0287 50.8032C41.7814 51.2945 40.4208 51.6347 39.1358 51.7858C37.8129 51.937 36.5657 51.8614 35.394 51.6725C34.2602 51.4457 33.2019 51.0677 32.1436 50.463C31.0854 49.8583 28.9688 48.2331 28.8555 48.0819C28.7421 47.9307 28.5153 47.6662 28.1751 47.2126C27.835 46.7591 27.3814 46.1166 26.9279 45.2851C26.4743 44.4536 26.0964 43.4709 25.794 42.4126C25.4917 41.3543 25.2649 40.2583 25.1137 39.0866C25.0003 37.8772 24.9247 36.5921 24.8869 35.7606C24.8492 34.9669 24.8114 34.6646 24.8492 34.0599C24.8492 33.4929 24.8492 32.6614 25.0003 31.4142C25.1137 30.1669 25.3783 28.504 25.6806 26.7654C25.983 25.0268 26.361 23.2126 26.8523 21.474C27.3814 19.7355 27.9484 18.0725 28.8177 16.2205C29.6492 14.3685 30.783 12.3654 31.7279 10.778C32.6728 9.22837 33.4287 8.1323 34.3736 7.07404C35.2806 5.97797 36.3011 4.9197 37.3594 4.01262C38.4177 3.10553 39.4381 2.34963 40.3074 1.7827C41.1767 1.21577 41.857 0.80002 42.1972 0.686634C42.5373 0.535453 42.5373 0.648839 42.4995 0.686634C42.4995 0.724429 42.4995 0.724429 42.4995 1.02679Z" fill="url(#paint3_radial_35_281)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M67.8224 1.02679C67.8224 1.29136 67.7846 1.85829 67.7469 2.46301C67.6713 3.06774 67.5201 3.74805 67.2933 4.65514C67.0665 5.52443 66.7642 6.62049 66.3106 8.05671C65.8571 9.53073 65.2524 11.3071 64.4209 13.6126C63.5516 15.9181 62.4933 18.7528 61.5862 21.2473C60.6791 23.7418 59.9232 25.8961 59.3185 27.6347C58.7516 29.3732 58.298 30.7339 57.9201 32.0189C57.5799 33.2662 57.2776 34.4 57.1264 35.4961C56.9752 36.5921 56.9374 37.6126 57.0508 38.5197C57.1642 39.389 57.3909 40.1449 57.7311 40.9764C58.0713 41.8079 58.5248 42.715 59.0539 43.6221C59.5831 44.5292 60.1878 45.4362 61.0193 46.3433C61.813 47.2504 62.8335 48.1197 63.8917 48.9134C64.95 49.6693 66.0839 50.3118 67.2933 50.8032C68.5406 51.2945 69.9012 51.6347 71.224 51.7858C72.5091 51.937 73.7563 51.8614 74.928 51.6725C76.0618 51.4457 77.1579 51.0677 78.2161 50.463C79.2744 49.8583 81.3532 48.2331 81.4665 48.0819C81.5799 47.9307 81.8067 47.6662 82.1469 47.2126C82.487 46.7591 82.9783 46.1166 83.3941 45.2851C83.8476 44.4536 84.2256 43.4709 84.5658 42.4126C84.8681 41.3543 85.0571 40.2583 85.2083 39.0866C85.3595 37.8772 85.435 36.5921 85.4728 35.7606C85.5106 34.9669 85.5106 34.6646 85.5106 34.0599C85.5106 33.4929 85.4728 32.6614 85.3595 31.4142C85.2083 30.1669 84.9815 28.504 84.6413 26.7654C84.339 25.0268 83.961 23.2126 83.4697 21.474C82.9783 19.7355 82.3736 18.0725 81.5043 16.2205C80.6728 14.3685 79.5768 12.3654 78.6319 10.778C77.687 9.22837 76.8933 8.1323 75.9862 7.07404C75.0413 5.97797 74.0209 4.9197 72.9626 4.01262C71.9421 3.10553 70.8839 2.34963 70.0146 1.7827C69.1453 1.21577 68.465 0.80002 68.1248 0.686634C67.7846 0.535453 67.8224 0.648839 67.8224 0.686634C67.8224 0.724429 67.8224 0.724429 67.8224 1.02679Z" fill="url(#paint4_radial_35_281)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8525 109.31V97.3292C50.8525 96.4599 50.6257 95.4772 52.6666 94.6457C53.4225 96.0063 61.8509 106.173 64.3454 109.31H73.7942V102.961C72.4336 101.411 68.8808 96.7622 67.7469 95.4394L62.9091 89.4677C62.4556 88.9386 61.6241 88.0693 61.4351 87.4268L73.7942 77.6378V71.4394H63.2493L60.5658 73.7071C59.1296 74.9166 55.5013 77.5244 54.1784 78.7717C53.7249 79.2252 51.3816 81.0772 50.928 81.2662L51.0036 71.4394H39.5517C39.5517 71.4772 39.5139 71.5528 39.5139 71.7795L39.4761 109.121C39.4761 109.197 39.5139 109.272 39.5139 109.31H50.8525Z" fill="#EDF2F4"></path> <path d="M9.05081 153.795C8.93743 154.513 9.39097 155.043 10.0713 155.043H14.3044C15.0225 155.043 15.665 154.513 15.8162 153.795L16.1185 152.019C16.1563 151.83 16.2697 151.679 16.3831 151.528L19.4067 148.655L23.4886 154.627C23.6398 154.929 23.9799 155.08 24.3579 155.08H30.9343C31.35 155.08 31.6902 154.589 31.4634 154.249L24.5847 144.044C24.5091 143.969 24.5469 143.817 24.6225 143.742L35.2807 133.461C35.6209 133.121 35.4697 132.63 35.054 132.63H28.4398C28.0996 132.63 27.6839 132.781 27.4193 133.083L18.3484 141.814C17.9327 142.117 18.0083 141.587 18.0083 141.587L19.4067 133.915C19.5201 133.235 19.0666 132.668 18.3484 132.668H14.1154C13.4351 132.668 12.7547 133.235 12.6414 133.915L9.05081 153.795ZM55.6524 134.482H38.6445C37.9264 134.482 37.2461 135.049 37.1327 135.767L33.8823 153.72C33.8067 154.06 33.9201 154.4 34.1091 154.665C34.3359 154.929 34.6382 155.043 35.0162 155.043H51.9862C52.4776 155.043 52.8933 154.702 53.0067 154.211L53.687 150.28C53.7248 150.054 53.687 149.827 53.5359 149.638C53.3847 149.487 53.1957 149.373 52.9311 149.373H41.139L41.517 147.446C41.517 147.408 41.5547 147.37 41.5925 147.37H51.0792C51.5327 147.37 51.9862 147.03 52.0618 146.539L52.7044 143.061C52.7422 142.797 52.7044 142.608 52.5532 142.419C52.402 142.23 52.1752 142.154 51.9485 142.154H42.4618L42.8398 140.076C42.8398 140.038 42.8776 140 42.9154 140H54.7075C55.1988 140 55.6146 139.66 55.6902 139.169L56.4083 135.389C56.4839 134.898 56.1437 134.482 55.6524 134.482ZM79.3878 134.52H75.6083C74.8902 134.52 74.2099 135.087 74.0965 135.805L72.3957 145.102C72.3957 145.14 72.3579 145.178 72.3579 145.178C72.3201 145.178 72.2823 145.178 72.2445 145.14L66.5374 135.011C66.3107 134.709 65.9705 134.52 65.5925 134.52H60.7547C60.0366 134.52 59.3563 135.087 59.2429 135.805L55.9925 153.72C55.8414 154.438 56.3705 155.043 57.1264 155.043H60.9059C61.624 155.043 62.3044 154.476 62.4177 153.758L64.2697 143.666C64.2697 143.666 64.2697 143.628 64.3075 143.628C64.3453 143.628 64.3831 143.628 64.4209 143.666L70.6193 154.589C70.8461 154.891 71.1862 155.043 71.5642 155.043H75.7595C76.4776 155.043 77.1579 154.513 77.2713 153.758L80.5217 135.88C80.6729 135.124 80.1437 134.52 79.3878 134.52ZM101.763 134.52H84.1122C83.3941 134.52 82.7138 135.087 82.5626 135.805L82.0713 138.677C81.9957 139.055 82.0713 139.395 82.2981 139.622C82.487 139.887 82.8272 140.038 83.2051 140.038H88.761L86.2666 153.72C86.191 154.06 86.3044 154.4 86.4933 154.665C86.7201 154.929 87.0225 155.043 87.4004 155.043H91.2177C91.9359 155.043 92.6162 154.513 92.7296 153.758L95.224 140.113C95.224 140.076 95.2618 140.038 95.2996 140.038H100.856C101.574 140.038 102.254 139.471 102.367 138.753L102.896 135.843C103.048 135.124 102.519 134.52 101.763 134.52Z" fill="url(#paint5_radial_35_281)"></path> <defs> <radialGradient id="paint0_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.0004 86.3657) rotate(130.944) scale(61.6695 61.7272)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> <radialGradient id="paint1_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.13 52.1307) rotate(116.448) scale(37.6838 30.3864)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> <radialGradient id="paint2_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(94.2387 51.911) rotate(115.638) scale(37.527 29.6011)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> <radialGradient id="paint3_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.0733 26.2251) rotate(115.591) scale(37.3524 29.424)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> <radialGradient id="paint4_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(71.2357 26.2251) rotate(115.608) scale(37.3579 29.4426)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> <radialGradient id="paint5_radial_35_281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(55.9384 143.849) rotate(164.482) scale(55.1543 28.7497)"> <stop stop-color="#EF233C"></stop> <stop offset="0.239216" stop-color="#EF233C"></stop> <stop offset="0.54902" stop-color="#DE0000"></stop> <stop offset="0.760784" stop-color="#D00000"></stop> <stop offset="1" stop-color="#D00000"></stop> </radialGradient> </defs> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/LogoKent.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="logs-container" data-astro-cid-sz7xmlte> <div class="logo-container" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Favicon", $$Favicon, { "size": 70, "data-astro-cid-sz7xmlte": true })} <h1 data-astro-cid-sz7xmlte>Samicel</h1> </div> <div class="logo-container" data-astro-cid-sz7xmlte> <a aria-label="Logo del desarrollador" target="_blank" href="https://github.com/Kent-Probe" data-astro-cid-sz7xmlte> ${renderComponent($$result, "LogoKent", $$LogoKent, { "data-astro-cid-sz7xmlte": true })} </a> </div> </div> <div class="links-container" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Información</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte>¿Quiénes somos?</li> <li data-astro-cid-sz7xmlte>Políticas de privacidad</li> </ul> </div> <div data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Redes sociales</h2> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/samicel945/?locale=es_LA" data-astro-cid-sz7xmlte>
Facebook
</a> </li> <li data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/samicel.acc/" data-astro-cid-sz7xmlte>
Instagram
</a> </li> </ul> </div> </div> </footer> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$SearchIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SearchIcon;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 18 18"> <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/SearchIcon.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<search data-astro-cid-otpdt6jm> <form data-form-search action="" method="get" data-astro-cid-otpdt6jm> <input data-input-search type="text" name="search" placeholder="Search..." data-astro-cid-otpdt6jm> <button type="submit" data-astro-cid-otpdt6jm> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "size": "12px", "fill": "#fff", "data-astro-cid-otpdt6jm": true })} </button> </form> </search> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Search.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  let isLogin = false;
  let email = "";
  if (Astro2.cookies.has("__session")) {
    const auth = getAuth(app);
    const sessionCookie = Astro2.cookies.get("__session").value;
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    if (decodedCookie) {
      isLogin = true;
      email = decodedCookie.email;
    }
  }
  return renderTemplate`${renderScript($$result, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Header.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="logo-container" data-astro-cid-3ef6ksr2${addAttribute(renderTransition($$result, "w4a5cbyw", "", "logo-samicel"), "data-astro-transition-scope")}> ${renderComponent($$result, "Favicon", $$Favicon, { "size": 50, "data-astro-cid-3ef6ksr2": true })} <h1 data-astro-cid-3ef6ksr2>Samicel</h1> </div> <div class="search-container" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Search", $$Search, { "data-astro-cid-3ef6ksr2": true })} </div> ${isLogin && renderTemplate`<div class="login-container" data-astro-cid-3ef6ksr2> ${email} <form action="/api/auth/signout" data-astro-cid-3ef6ksr2> <button type="submit" data-astro-cid-3ef6ksr2>
Cerrar sesión
</button> <button type="button" id="create-credit" data-astro-cid-3ef6ksr2>
Crear un crédito
</button> </form> </div>`} ${!isLogin && renderTemplate`<div class="login-container" data-astro-cid-3ef6ksr2${addAttribute(renderTransition($$result, "wecf3g2j", "", "login-text"), "data-astro-transition-scope")}> <a href="/login" data-astro-cid-3ef6ksr2>Iniciar sesión</a> </div>`} </header> `;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/components/Header.astro", "self");

const $$Astro$6 = createAstro();
const $$BatteryIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BatteryIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="9" height="16" viewBox="0 0 9 16"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M6.5 1V0.31C6.50134 0.270598 6.49489 0.231319 6.48104 0.194409C6.46718 0.1575 6.44619 0.123682 6.41925 0.0948918C6.39232 0.0661011 6.35998 0.0429014 6.32407 0.0266192C6.28817 0.010337 6.2494 0.00129153 6.21 0H2.79C2.7506 0.00129153 2.71183 0.010337 2.67593 0.0266192C2.64002 0.0429014 2.60768 0.0661011 2.58075 0.0948918C2.55381 0.123682 2.53282 0.1575 2.51896 0.194409C2.50511 0.231319 2.49866 0.270598 2.5 0.31V1H0.5C0.365102 1.01116 0.239185 1.07212 0.146761 1.17102C0.0543379 1.26991 0.0020227 1.39966 0 1.535V15.535C0.00887293 15.6615 0.0654436 15.7798 0.158267 15.8661C0.251091 15.9525 0.373239 16.0003 0.5 16H8.5C8.62757 16.0002 8.7504 15.9517 8.84336 15.8643C8.93631 15.7769 8.99235 15.6573 9 15.53V1.53C8.99675 1.39553 8.94389 1.26701 8.85159 1.16916C8.75928 1.07132 8.63406 1.01107 8.5 1H6.5ZM5.63 11.72C5.70095 11.8626 5.71236 12.0275 5.66172 12.1784C5.61109 12.3294 5.50255 12.4541 5.36 12.525C5.21745 12.5959 5.05255 12.6074 4.90158 12.5567C4.75061 12.5061 4.62595 12.3976 4.555 12.255L1.825 6.78L4.825 7.28L3.68 5.28C3.6406 5.21171 3.61504 5.13633 3.60478 5.05817C3.59451 4.98 3.59974 4.90058 3.62017 4.82444C3.6406 4.74829 3.67583 4.67692 3.72384 4.61439C3.77185 4.55186 3.83171 4.4994 3.9 4.46C3.96829 4.4206 4.04367 4.39504 4.12183 4.38478C4.2 4.37451 4.27942 4.37974 4.35556 4.40017C4.43171 4.4206 4.50308 4.45583 4.56561 4.50384C4.62814 4.55185 4.6806 4.61171 4.72 4.68L7.135 8.865L3.95 8.35L5.63 11.72Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/BatteryIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$CameraFrontIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CameraFrontIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="20" height="18" viewBox="0 0 20 18"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M0 18V2H5.15L7 0H13L14.85 2H20V18H0ZM6 14H14V13.45C14 12.7 13.6333 12.1043 12.9 11.663C12.1667 11.2217 11.2 11.0007 10 11C8.8 10.9993 7.83333 11.2203 7.1 11.663C6.36667 12.1057 6 12.7013 6 13.45V14ZM10 10C10.55 10 11.021 9.80433 11.413 9.413C11.805 9.02167 12.0007 8.55067 12 8C11.9993 7.44933 11.8037 6.97867 11.413 6.588C11.0223 6.19733 10.5513 6.00133 10 6C9.44867 5.99867 8.978 6.19467 8.588 6.588C8.198 6.98133 8.002 7.452 8 8C7.998 8.548 8.194 9.019 8.588 9.413C8.982 9.807 9.45267 10.0027 10 10Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/CameraFrontIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$CameraIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CameraIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="20" height="18"${addAttribute(fill, "fill")} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"> <path d="M10 14.5C11.25 14.5 12.3127 14.0627 13.188 13.188C14.0633 12.3133 14.5007 11.2507 14.5 10C14.4993 8.74933 14.062 7.687 13.188 6.813C12.314 5.939 11.2513 5.50133 10 5.5C8.74867 5.49867 7.68633 5.93633 6.813 6.813C5.93967 7.68967 5.502 8.752 5.5 10C5.498 11.248 5.93567 12.3107 6.813 13.188C7.69033 14.0653 8.75267 14.5027 10 14.5ZM10 12.5C9.3 12.5 8.70833 12.2583 8.225 11.775C7.74167 11.2917 7.5 10.7 7.5 10C7.5 9.3 7.74167 8.70833 8.225 8.225C8.70833 7.74167 9.3 7.5 10 7.5C10.7 7.5 11.2917 7.74167 11.775 8.225C12.2583 8.70833 12.5 9.3 12.5 10C12.5 10.7 12.2583 11.2917 11.775 11.775C11.2917 12.2583 10.7 12.5 10 12.5ZM2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V4C0 3.45 0.196 2.97933 0.588 2.588C0.98 2.19667 1.45067 2.00067 2 2H5.15L6.4 0.65C6.58333 0.45 6.80433 0.291667 7.063 0.175C7.32167 0.0583333 7.59233 0 7.875 0H12.125C12.4083 0 12.6793 0.0583333 12.938 0.175C13.1967 0.291667 13.4173 0.45 13.6 0.65L14.85 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.0217 17.805 18.5507 18.0007 18 18H2Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/CameraIcon.astro", void 0);

const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/closeIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$DeviceIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DeviceIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="11" height="16" viewBox="0 0 11 16"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M0 2C0 0.896875 0.896875 0 2 0H9C10.1031 0 11 0.896875 11 2V14C11 15.1031 10.1031 16 9 16H2C0.896875 16 0 15.1031 0 14V2ZM4 14C4 14.275 4.225 14.5 4.5 14.5H6.5C6.775 14.5 7 14.275 7 14C7 13.725 6.775 13.5 6.5 13.5H4.5C4.225 13.5 4 13.725 4 14ZM9 2H2V12H9V2Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/DeviceIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$HardDiskIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HardDiskIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="20" viewBox="0 0 16 20"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196666 19.0217 0.000666667 18.5507 0 18V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H14C14.55 0 15.021 0.196 15.413 0.588C15.805 0.98 16.0007 1.45067 16 2V18C16 18.55 15.8043 19.021 15.413 19.413C15.0217 19.805 14.5507 20.0007 14 20H2ZM5 16H11C11.2833 16 11.521 15.904 11.713 15.712C11.905 15.52 12.0007 15.2827 12 15C11.9993 14.7173 11.9033 14.48 11.712 14.288C11.5207 14.096 11.2833 14 11 14H5C4.71667 14 4.47933 14.096 4.288 14.288C4.09667 14.48 4.00067 14.7173 4 15C3.99933 15.2827 4.09533 15.5203 4.288 15.713C4.48067 15.9057 4.718 16.0013 5 16ZM8 12C9.1 12 10.0417 11.6083 10.825 10.825C11.6083 10.0417 12 9.1 12 8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8C4 9.1 4.39167 10.0417 5.175 10.825C5.95833 11.6083 6.9 12 8 12ZM8 9C7.71667 9 7.47933 8.904 7.288 8.712C7.09667 8.52 7.00067 8.28267 7 8C6.99933 7.71733 7.09533 7.48 7.288 7.288C7.48067 7.096 7.718 7 8 7C8.282 7 8.51967 7.096 8.713 7.288C8.90633 7.48 9.002 7.71733 9 8C8.998 8.28267 8.902 8.52033 8.712 8.713C8.522 8.90567 8.28467 9.00133 8 9Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/HardDiskIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$MemoryIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MemoryIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="15" height="10" viewBox="0 0 15 10"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M14 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9C0 9.13261 0.0526784 9.25979 0.146447 9.35355C0.240215 9.44732 0.367392 9.5 0.5 9.5C0.632608 9.5 0.759785 9.44732 0.853553 9.35355C0.947322 9.25979 1 9.13261 1 9V8H2V9C2 9.13261 2.05268 9.25979 2.14645 9.35355C2.24021 9.44732 2.36739 9.5 2.5 9.5C2.63261 9.5 2.75979 9.44732 2.85355 9.35355C2.94732 9.25979 3 9.13261 3 9V8H4V9C4 9.13261 4.05268 9.25979 4.14645 9.35355C4.24021 9.44732 4.36739 9.5 4.5 9.5C4.63261 9.5 4.75979 9.44732 4.85355 9.35355C4.94732 9.25979 5 9.13261 5 9V8H6V9C6 9.13261 6.05268 9.25979 6.14645 9.35355C6.24021 9.44732 6.36739 9.5 6.5 9.5C6.63261 9.5 6.75979 9.44732 6.85355 9.35355C6.94732 9.25979 7 9.13261 7 9V8H8V9C8 9.13261 8.05268 9.25979 8.14645 9.35355C8.24021 9.44732 8.36739 9.5 8.5 9.5C8.63261 9.5 8.75979 9.44732 8.85355 9.35355C8.94732 9.25979 9 9.13261 9 9V8H10V9C10 9.13261 10.0527 9.25979 10.1464 9.35355C10.2402 9.44732 10.3674 9.5 10.5 9.5C10.6326 9.5 10.7598 9.44732 10.8536 9.35355C10.9473 9.25979 11 9.13261 11 9V8H12V9C12 9.13261 12.0527 9.25979 12.1464 9.35355C12.2402 9.44732 12.3674 9.5 12.5 9.5C12.6326 9.5 12.7598 9.44732 12.8536 9.35355C12.9473 9.25979 13 9.13261 13 9V8H14V9C14 9.13261 14.0527 9.25979 14.1464 9.35355C14.2402 9.44732 14.3674 9.5 14.5 9.5C14.6326 9.5 14.7598 9.44732 14.8536 9.35355C14.9473 9.25979 15 9.13261 15 9V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0ZM12.5 2.5V5.5H8.5V2.5H12.5ZM6.5 2.5V5.5H2.5V2.5H6.5Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/MemoryIcon.astro", void 0);

const $$Astro = createAstro();
const $$ProcessorIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProcessorIcon;
  const { fill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg width="20" height="20" viewBox="0 0 20 20"${addAttribute(fill, "fill")} xmlns="http://www.w3.org/2000/svg"> <path d="M8.10796 7.68799C9.18996 7.56799 10.31 7.56799 11.392 7.68799C11.495 7.69938 11.5913 7.74496 11.6654 7.81746C11.7396 7.88996 11.7873 7.98521 11.801 8.08799C11.93 9.19199 11.93 10.308 11.801 11.412C11.7872 11.5149 11.7394 11.6103 11.6651 11.6828C11.5907 11.7553 11.4942 11.8008 11.391 11.812C10.2999 11.9321 9.199 11.9321 8.10796 11.812C8.00489 11.8006 7.90861 11.755 7.83448 11.6825C7.76035 11.61 7.71264 11.5148 7.69896 11.412C7.56975 10.3078 7.56975 9.19223 7.69896 8.08799C7.71268 7.98505 7.76054 7.88969 7.83487 7.81717C7.9092 7.74465 8.00572 7.69917 8.10896 7.68799"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 0C12.9489 0 13.1397 0.0790175 13.2803 0.21967C13.421 0.360322 13.5 0.551088 13.5 0.75V3.677C14.0723 3.79044 14.5976 4.07212 15.0088 4.48598C15.42 4.89983 15.6983 5.42702 15.808 6H18.75C18.9489 6 19.1397 6.07902 19.2803 6.21967C19.421 6.36032 19.5 6.55109 19.5 6.75C19.5 6.94891 19.421 7.13968 19.2803 7.28033C19.1397 7.42098 18.9489 7.5 18.75 7.5H15.962C15.9987 8 16.023 8.5 16.035 9H17.75C17.9489 9 18.1397 9.07902 18.2803 9.21967C18.421 9.36032 18.5 9.55109 18.5 9.75C18.5 9.94891 18.421 10.1397 18.2803 10.2803C18.1397 10.421 17.9489 10.5 17.75 10.5H16.035C16.023 11 15.9987 11.5 15.962 12H18.75C18.9489 12 19.1397 12.079 19.2803 12.2197C19.421 12.3603 19.5 12.5511 19.5 12.75C19.5 12.9489 19.421 13.1397 19.2803 13.2803C19.1397 13.421 18.9489 13.5 18.75 13.5H15.808C15.6983 14.073 15.42 14.6002 15.0088 15.014C14.5976 15.4279 14.0723 15.7096 13.5 15.823V18.75C13.5 18.9489 13.421 19.1397 13.2803 19.2803C13.1397 19.421 12.9489 19.5 12.75 19.5C12.5511 19.5 12.3603 19.421 12.2197 19.2803C12.079 19.1397 12 18.9489 12 18.75V15.976C11.5013 16.0113 11.0013 16.0347 10.5 16.046V17.75C10.5 17.9489 10.421 18.1397 10.2803 18.2803C10.1397 18.421 9.94891 18.5 9.75 18.5C9.55109 18.5 9.36032 18.421 9.21967 18.2803C9.07902 18.1397 9 17.9489 9 17.75V16.046C8.49952 16.0344 7.99938 16.0111 7.5 15.976V18.75C7.5 18.9489 7.42098 19.1397 7.28033 19.2803C7.13968 19.421 6.94891 19.5 6.75 19.5C6.55109 19.5 6.36032 19.421 6.21967 19.2803C6.07902 19.1397 6 18.9489 6 18.75V15.823C5.42774 15.7096 4.90237 15.4279 4.49119 15.014C4.08 14.6002 3.80173 14.073 3.692 13.5H0.75C0.551088 13.5 0.360322 13.421 0.21967 13.2803C0.0790175 13.1397 0 12.9489 0 12.75C0 12.5511 0.0790175 12.3603 0.21967 12.2197C0.360322 12.079 0.551088 12 0.75 12H3.538C3.50133 11.5 3.47667 11 3.464 10.5H1.75C1.55109 10.5 1.36032 10.421 1.21967 10.2803C1.07902 10.1397 1 9.94891 1 9.75C1 9.55109 1.07902 9.36032 1.21967 9.21967C1.36032 9.07902 1.55109 9 1.75 9H3.464C3.47667 8.5 3.50133 8 3.538 7.5H0.75C0.551088 7.5 0.360322 7.42098 0.21967 7.28033C0.0790175 7.13968 0 6.94891 0 6.75C0 6.55109 0.0790175 6.36032 0.21967 6.21967C0.360322 6.07902 0.551088 6 0.75 6H3.692C3.80173 5.42702 4.08 4.89983 4.49119 4.48598C4.90237 4.07212 5.42774 3.79044 6 3.677V0.75C6 0.551088 6.07902 0.360322 6.21967 0.21967C6.36032 0.0790175 6.55109 0 6.75 0C6.94891 0 7.13968 0.0790175 7.28033 0.21967C7.42098 0.360322 7.5 0.551088 7.5 0.75V3.524C7.99867 3.48867 8.49867 3.46533 9 3.454V1.75C9 1.55109 9.07902 1.36032 9.21967 1.21967C9.36032 1.07902 9.55109 1 9.75 1C9.94891 1 10.1397 1.07902 10.2803 1.21967C10.421 1.36032 10.5 1.55109 10.5 1.75V3.454C11.0013 3.46533 11.5013 3.48867 12 3.524V0.75C12 0.551088 12.079 0.360322 12.2197 0.21967C12.3603 0.0790175 12.5511 0 12.75 0ZM11.558 6.197C10.3564 6.06371 9.14365 6.06371 7.942 6.197C7.044 6.297 6.316 7.005 6.21 7.914C6.06728 9.13384 6.06728 10.3662 6.21 11.586C6.316 12.496 7.044 13.202 7.942 13.303C9.134 13.436 10.366 13.436 11.558 13.303C11.9982 13.2546 12.4091 13.0585 12.7236 12.7467C13.0381 12.4349 13.2377 12.0258 13.29 11.586C13.433 10.366 13.433 9.134 13.29 7.914C13.2377 7.47422 13.0381 7.0651 12.7236 6.7533C12.4091 6.44151 11.9982 6.24542 11.558 6.197Z"></path> </svg>`;
}, "C:/Users/USER/Desktop/Proyectos/samicel/catalogo_credito/catalog_of_products_on_credit/src/icon/ProcessorIcon.astro", void 0);

export { $$Header as $, $$CameraIcon as a, $$CameraFrontIcon as b, $$HardDiskIcon as c, $$MemoryIcon as d, $$ProcessorIcon as e, $$DeviceIcon as f, $$BatteryIcon as g, $$CloseIcon as h, $$Footer as i };
