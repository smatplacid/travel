import React from 'react';
import styles from './Header.css';
// import logo from './../logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* <h1>Travel App</h1> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="mainlogo"
                    viewBox="0 0 6048 6048"
                >

                    <g id="box" transform="matrix(1.03431,0,0,1.01471,-76.1135,-28.9938)">
                        <path d="M5566.21,1020.04L5566.21,4996.66C5566.21,5344.72 5288.99,5627.3 4947.53,5627.3L1046.26,5627.3C704.804,5627.3 427.583,5344.72 427.583,4996.66L427.583,1020.04C427.583,671.982 704.804,389.406 1046.26,389.406L4947.53,389.406C5288.99,389.406 5566.21,671.982 5566.21,1020.04Z" />
                    </g>

                    <g id="pin" transform="matrix(6.16721,-8.54198e-17,-8.54198e-17,6.40411,3023.62,2309.79)">
                        <g transform="matrix(1,0,0,1,-300,-303.5)">
                            <g transform="matrix(0.142279,0,0,-0.142279,-130.199,718.771)">
                                <path d="M2016.55,2014.62C1996.8,2044.6 2002.81,2084.64 2030.49,2107.49C2298.75,2328.51 3019.53,2913.94 3038.44,2922.15C3038.89,2921.73 3039.27,2921.24 3039.57,2920.7C3051.71,2897.43 3160.79,2678.26 3183.38,2636.51C3188.9,2629.42 3192.43,2621.19 3193.96,2611.82C3196.91,2610.62 3198.09,2608.27 3197.49,2604.77C3202.45,2603.1 3204.8,2599.57 3204.54,2594.19C3208.2,2589.14 3210.55,2583.26 3211.59,2576.55C3216.55,2574.89 3218.91,2571.36 3218.65,2565.97C3230.13,2546.55 3240.71,2526.56 3250.39,2506.02C3255.91,2498.93 3259.44,2490.7 3260.97,2481.33C3282.42,2440.01 3303.58,2398.87 3324.45,2357.89C3329.97,2350.8 3333.5,2342.57 3335.03,2333.2C3339.99,2331.53 3342.35,2328.01 3342.09,2322.62C3347.61,2315.53 3351.14,2307.3 3352.67,2297.93C3357.63,2296.26 3359.98,2292.74 3359.72,2287.35C3365.73,2277.63 3370.43,2267.05 3373.83,2255.61C3378.79,2253.94 3381.14,2250.41 3380.88,2245.03C3385.24,2237.45 3388.77,2229.22 3391.46,2220.34C3396.42,2218.67 3398.78,2215.14 3398.52,2209.76C3422.32,2166.14 3445.83,2122.06 3469.06,2077.5C3479.16,2072.36 3489.74,2071.19 3500.8,2073.97C3510.67,2080.9 3520.08,2088.54 3529.01,2096.9C3531.06,2104.83 3535.76,2110.71 3543.12,2114.53C3543.12,2116.89 3544.29,2118.06 3546.65,2118.06C3548.69,2125.99 3553.39,2131.87 3560.75,2135.7C3561.93,2139.22 3564.28,2141.57 3567.81,2142.75C3569.85,2150.68 3574.55,2156.56 3581.91,2160.38C3581.91,2162.74 3583.09,2163.91 3585.44,2163.91C3587.49,2171.84 3592.19,2177.72 3599.55,2181.54C3601.75,2189.49 3606.45,2195.37 3613.66,2199.18C3619.21,2210.05 3626.85,2219.45 3636.58,2227.39C3640.81,2238.77 3642.57,2250.53 3641.87,2262.66C3636.86,2273.69 3633.34,2285.44 3631.29,2297.93C3626.27,2305.04 3623.92,2313.27 3624.24,2322.62C3621.89,2330.85 3619.54,2339.08 3617.18,2347.31C3615.01,2347.7 3613.24,2348.87 3611.89,2350.83C3610.14,2360.17 3609.55,2369.57 3610.13,2379.05L3610.13,2382.58C3603.86,2397.01 3599.15,2412.3 3596.02,2428.43L3596.02,2431.95C3591,2439.06 3588.65,2447.29 3588.97,2456.64C3584.15,2468.85 3580.62,2481.78 3578.39,2495.43L3578.39,2498.96C3572.01,2508.29 3568.48,2518.87 3567.81,2530.7C3567.6,2540.72 3565.25,2550.13 3560.75,2558.92C3555.73,2566.03 3553.38,2574.25 3553.7,2583.61C3550.16,2597.79 3546.64,2611.9 3543.12,2625.93C3536.85,2636.53 3533.33,2648.28 3532.54,2661.2C3514.39,2740.46 3494.41,2819.23 3472.58,2897.5C3467.56,2904.61 3465.21,2912.83 3465.53,2922.19C3461.24,2936.18 3457.72,2950.29 3454.95,2964.51C3449.93,2971.62 3447.58,2979.84 3447.89,2989.2C3443.27,3003.01 3439.74,3017.12 3437.31,3031.52C3432.29,3038.62 3429.94,3046.85 3430.26,3056.21C3425.88,3067.41 3422.35,3079.17 3419.68,3091.47C3414.13,3097.12 3411.78,3104.18 3412.63,3112.64C3410.83,3123.36 3408.47,3133.93 3405.57,3144.38C3405.81,3149.52 3404.63,3154.22 3402.05,3158.49C3396.49,3164.14 3394.14,3171.19 3394.99,3179.65C3393.32,3190.92 3390.97,3202.09 3387.94,3213.15C3389.68,3221.99 3394.39,3228.45 3402.05,3232.55C3409.03,3244.22 3417.26,3254.81 3426.73,3264.29C3434.82,3277.08 3444.23,3288.84 3454.95,3299.56C3460.33,3310.36 3467.38,3319.77 3476.11,3327.78C3478.31,3335.72 3483.01,3341.6 3490.22,3345.41C3490.22,3347.76 3491.39,3348.94 3493.74,3348.94C3495.79,3356.87 3500.49,3362.74 3507.85,3366.57C3509.71,3372.67 3513.23,3377.38 3518.43,3380.68C3519.27,3387.39 3522.8,3392.1 3529.01,3394.79C3532.34,3403.99 3538.22,3411.04 3546.65,3415.95C3548.69,3423.88 3553.39,3429.76 3560.75,3433.58C3562.61,3439.68 3566.14,3444.39 3571.33,3447.69C3572.17,3454.4 3575.7,3459.11 3581.91,3461.8C3583.09,3465.32 3585.44,3467.68 3588.97,3468.85C3591.01,3476.78 3595.72,3482.66 3603.08,3486.48C3609.98,3498.1 3618.21,3508.68 3627.76,3518.23C3629.81,3526.16 3634.51,3532.03 3641.87,3535.86C3642.71,3542.58 3646.24,3547.28 3652.45,3549.97C3662.98,3565.19 3674.74,3579.3 3687.72,3592.29C3689.77,3600.22 3694.47,3606.1 3701.83,3609.93C3701.83,3612.28 3703,3613.45 3705.36,3613.45C3707.4,3621.38 3712.1,3627.26 3719.46,3631.09C3719.46,3633.44 3720.64,3634.61 3722.99,3634.61C3725.03,3642.54 3729.74,3648.42 3737.1,3652.25C3747.79,3666.44 3758.37,3680.55 3768.84,3694.57C3768.58,3699.95 3770.93,3703.48 3775.89,3705.15C3775.89,3707.5 3777.07,3708.68 3779.42,3708.68C3780.95,3718.05 3784.48,3726.28 3790,3733.37C3792.35,3733.37 3793.53,3734.54 3793.53,3736.89C3794.43,3745.59 3797.95,3752.65 3804.11,3758.05C3810.47,3775.29 3815.18,3792.92 3818.22,3810.96C3822.47,3849.79 3822.47,3888.59 3818.22,3927.34C3821.39,3940.54 3816.69,3947.59 3804.11,3948.5C3770.1,3951.41 3736.01,3952.59 3701.83,3952.03L3698.3,3952.03C3689.82,3947.56 3680.41,3945.21 3670.09,3944.98C3658.09,3943.74 3646.33,3941.39 3634.82,3937.92C3630.73,3931.75 3624.85,3928.22 3617.18,3927.34C3609.94,3927.69 3604.06,3925.34 3599.55,3920.29C3596.77,3914.63 3592.07,3912.28 3585.44,3913.24C3562.45,3902.01 3542.46,3886.72 3525.49,3867.39C3521.66,3860.03 3515.78,3855.32 3507.85,3853.28C3498.65,3849.95 3491.6,3844.07 3486.69,3835.64C3482.86,3828.28 3476.99,3823.58 3469.06,3821.54C3452.46,3808.57 3436,3795.63 3419.68,3782.74C3417.79,3775.88 3413.09,3772.35 3405.57,3772.16C3299.41,3688.97 3193.6,3604.91 3088.15,3519.99C3076.17,3519.83 3064.41,3521.59 3052.89,3525.28C3040.57,3525.09 3029.99,3528.62 3021.14,3535.86L2936.5,3557.02C2927.15,3556.7 2918.92,3559.05 2911.81,3564.08C2903.58,3566.43 2895.35,3568.78 2887.12,3571.13C2867.55,3574.36 2848.73,3579.06 2830.69,3585.24C2794.64,3596.31 2758.2,3605.71 2721.36,3613.45C2713.62,3613.77 2705.97,3614.94 2698.44,3616.98C2693.58,3617.63 2690.64,3619.98 2689.62,3624.03C2677.49,3625.05 2665.73,3627.4 2654.35,3631.09C2637.14,3632.11 2621.86,3636.81 2608.5,3645.19C2595.89,3643.94 2585.3,3647.47 2576.76,3655.77C2558.6,3658.74 2540.97,3662.27 2523.86,3666.35C2514.5,3666.04 2506.27,3668.39 2499.17,3673.41C2495.26,3673.61 2491.73,3674.78 2488.59,3676.93C2479.23,3676.62 2471.01,3678.97 2463.9,3683.99L2456.85,3683.99C2447.49,3683.67 2439.26,3686.02 2432.16,3691.04C2402.01,3700.34 2371.45,3708.57 2340.46,3715.73C2331.11,3715.41 2322.88,3717.76 2315.77,3722.78C2296.59,3727.52 2277.77,3732.22 2259.34,3736.89C2249.99,3736.57 2241.76,3738.92 2234.65,3743.95C2215.29,3748.08 2196.48,3752.78 2178.22,3758.05C2162.94,3762.76 2147.66,3767.46 2132.37,3772.16C2120.37,3772.72 2108.62,3771.54 2097.11,3768.63C2054.78,3732.19 2012.46,3695.74 1970.14,3659.3C1966.31,3651.94 1960.43,3647.24 1952.5,3645.19C1947.95,3643.22 1945.02,3639.7 1943.69,3634.61C1937.65,3609.6 1946.47,3593.14 1970.14,3585.24C1975.52,3585.49 1979.05,3583.14 1980.72,3578.18C1999,3569.91 2016.64,3560.5 2033.62,3549.97C2043.66,3549.78 2051.89,3546.26 2058.31,3539.39C2062.57,3537.86 2066.1,3535.51 2068.89,3532.33C2078.93,3532.15 2087.16,3528.62 2093.58,3521.75C2134.72,3500.59 2175.87,3479.43 2217.02,3458.27C2227.22,3459.92 2234.28,3456.4 2238.18,3447.69C2243.45,3445.96 2248.16,3443.62 2252.29,3440.64C2262.49,3442.29 2269.54,3438.76 2273.45,3430.05C2276.59,3427.9 2280.12,3426.73 2284.03,3426.53C2289.41,3426.78 2292.94,3424.43 2294.61,3419.47C2313.29,3410.18 2332.1,3400.78 2351.04,3391.26C2359.74,3390.36 2366.79,3386.83 2372.2,3380.68C2413.35,3359.52 2454.49,3338.36 2495.64,3317.2C2506.19,3318.37 2514.42,3314.85 2520.33,3306.61C2531.55,3296.95 2544.48,3289.9 2559.12,3285.45C2567.83,3284.55 2574.88,3281.03 2580.29,3274.87C2585.75,3271.55 2591.63,3269.2 2597.92,3267.82C2603.3,3268.08 2606.83,3265.72 2608.5,3260.76C2641.63,3244.64 2726.09,3200.43 2767.88,3180.12C2777.52,3179.57 2785.27,3172 2786.06,3162.38C2725.63,3096.12 2211.3,2554.99 1951.1,2281.39C1935.99,2265.5 1914.34,2257.57 1892.54,2259.95C1870.75,2262.32 1851.31,2274.73 1839.98,2293.5C1612.15,2671.85 1442.79,3039.04 1442.79,3294.67C1442.79,4167.15 2151.14,4875.5 3023.62,4875.5C3896.11,4875.5 4604.45,4167.15 4604.45,3294.67C4604.45,2758.51 3859.45,1731.59 3392.32,1140.39C3303.18,1027.65 3167.35,961.897 3023.62,961.897C2879.9,961.897 2744.07,1027.65 2654.92,1140.39C2465.14,1380.59 2229.48,1692.71 2016.55,2014.62Z" />
                            </g>
                        </g>
                    </g>

                    <g id="name" transform="matrix(1,0,0,1,0,-1327.34)">
                        <path d="M1299.89,5533.77L1316.68,5498.82C1306.03,5499.14 1295,5499.96 1283.57,5501.29C1276.42,5502.2 1266.68,5502.23 1254.35,5501.37C1237.08,5500.16 1229.05,5490.93 1230.26,5473.66C1230.77,5466.26 1233.59,5457.69 1238.69,5447.95C1243.8,5438.22 1249.36,5430.9 1255.37,5426.01C1268.51,5415.24 1294.99,5407.53 1334.81,5402.88C1374.62,5398.22 1420.95,5397.74 1473.82,5401.44C1514.34,5404.27 1552.64,5412.44 1588.7,5425.94C1624.77,5439.44 1655.52,5456.73 1680.96,5477.81C1706.4,5498.89 1725.74,5522.37 1738.98,5548.26C1752.22,5574.15 1757.82,5601.73 1755.77,5630.98C1753.58,5662.34 1745.02,5691.05 1730.1,5717.1C1715.17,5743.14 1695.03,5765.37 1669.66,5783.79C1652.87,5796.07 1637.35,5805.25 1623.11,5811.34C1608.88,5817.43 1588.62,5823.45 1562.36,5829.4C1568.19,5842.21 1573.43,5852.14 1578.07,5859.19C1582.71,5866.24 1590.6,5876.18 1601.75,5889C1631.47,5919.76 1675.12,5948.84 1732.7,5976.24C1735.42,5977.85 1738.85,5979.5 1742.98,5981.21C1734.54,6010.72 1727.02,6032.15 1720.42,6045.5C1713.82,6058.85 1703.97,6073.21 1690.85,6088.58C1666.98,6115.95 1639.72,6128.57 1609.06,6126.43C1592.14,6125.24 1571.7,6117.53 1547.73,6103.28C1523.76,6089.04 1504.43,6072.9 1489.76,6054.88C1478.43,6039.57 1468.14,6023.45 1458.87,6006.52C1449.61,5989.58 1440.41,5970.44 1431.28,5949.09C1422.15,5927.73 1414.48,5907.02 1408.27,5886.93C1402.06,5866.85 1397.71,5849.28 1395.22,5834.23C1394.71,5831.36 1394.64,5827.29 1395.01,5822.01C1395.53,5814.61 1398.05,5808.94 1402.58,5805.01C1407.1,5801.07 1415.12,5797.74 1426.65,5795C1442.9,5790.47 1456.38,5785.13 1467.08,5778.97C1477.78,5772.82 1491.39,5763.06 1507.9,5749.69C1526.88,5731.55 1542.29,5709.88 1554.15,5684.68C1566,5659.48 1572.85,5633.67 1574.7,5607.25C1576.89,5575.89 1571.4,5550.98 1558.22,5532.53C1545.04,5514.09 1522.89,5500.23 1491.77,5490.98C1453.71,5599.15 1416.46,5700.83 1380.02,5796.01L1366.1,5835.4C1343.32,5897.54 1324.59,5943.51 1309.93,5973.28C1295.27,6003.06 1281.34,6023.68 1268.14,6035.15C1254.93,6046.61 1234.86,6057.42 1207.93,6067.58C1181,6077.73 1160.12,6082.29 1145.31,6081.26C1116.4,6079.24 1103.07,6062.01 1105.34,6029.59C1106.28,6016.2 1111.85,5993.48 1122.06,5961.44C1132.26,5929.4 1147.49,5887.61 1167.74,5836.08C1187.98,5784.55 1208.94,5734.23 1230.62,5685.1C1252.29,5635.97 1275.38,5585.53 1299.89,5533.77Z" />
                        <path d="M2182.99,5872.43L2172.8,5875.2C2147.1,5881.22 2128.6,5883.99 2117.31,5883.53C2103.54,5882.97 2096.8,5879.15 2097.09,5872.09C2097.19,5869.62 2100.28,5863.21 2106.37,5852.85C2127.36,5823.66 2138.4,5795.82 2139.49,5769.35C2140.11,5754.17 2138.03,5740.21 2133.25,5727.46C2128.47,5714.72 2122.9,5708.21 2116.55,5707.95C2110.9,5707.72 2102.01,5713.36 2089.87,5724.89C2055.58,5759.19 2028.05,5794.66 2007.28,5831.29C1986.51,5867.91 1975.52,5900.88 1974.32,5930.17C1973.52,5949.59 1976.84,5965.81 1984.26,5978.84C1991.68,5991.88 2001.39,5998.64 2013.39,5999.13C2023.63,5999.55 2043.23,5989.39 2072.18,5968.66C2101.14,5947.92 2133.83,5920.27 2170.25,5885.7L2185.03,5874.64L2182.99,5872.43ZM2146.26,5992.38L2146.17,5994.5L2144.14,5992.29C2109.74,6029.42 2078.35,6059.69 2049.99,6083.1C2021.63,6106.51 1995.64,6123.92 1972.01,6135.32C1948.38,6146.73 1926.86,6152.04 1907.45,6151.24C1867.92,6149.62 1835.81,6135.05 1811.13,6107.52C1786.44,6079.99 1774.93,6045.93 1776.6,6005.33C1777.63,5980.27 1785.19,5950.88 1799.31,5917.16C1813.42,5883.45 1832.26,5850.63 1855.85,5818.72C1895.11,5766.58 1943.57,5722.96 2001.23,5687.84C2060.69,5651.74 2117.25,5634.79 2170.9,5636.99C2216.08,5638.84 2252.85,5649.63 2281.21,5669.36C2309.58,5689.08 2323.18,5713.06 2322.02,5741.3C2321.17,5762.12 2313.03,5783.89 2297.6,5806.59C2316.66,5807.37 2328.58,5809.9 2333.35,5814.16C2338.13,5818.42 2340.21,5827.96 2339.6,5842.79C2339.66,5841.38 2338.48,5848.58 2336.07,5864.39C2332.52,5899.24 2330.12,5931.85 2328.88,5962.21C2328.22,5978.09 2327.91,5990.1 2327.93,5998.23C2327.95,6006.37 2328.27,6015.75 2328.9,6026.38C2329.52,6037.02 2330.23,6045.53 2331.03,6051.93C2333.18,6068.63 2337.09,6085.23 2342.78,6101.73C2320.75,6121.69 2299.83,6136.12 2280.01,6145.03C2260.2,6153.94 2240.24,6157.99 2220.12,6157.16C2165.76,6154.94 2140.45,6108.29 2144.18,6017.22C2144.61,6006.63 2145.3,5998.35 2146.26,5992.38Z" />
                        <path d="M2706.47,5994.77L2697.34,6002.05C2695.56,6003.08 2683.58,6011.9 2661.41,6028.5C2618.49,6061.03 2583.11,6086.7 2555.25,6105.51C2527.39,6124.33 2504.2,6138.09 2485.69,6146.81C2467.18,6155.52 2452.28,6159.79 2440.97,6159.61C2421.9,6159.3 2406.74,6151.2 2395.52,6135.3C2384.29,6119.4 2378.87,6098.91 2379.27,6073.83C2379.95,6031.44 2387.09,5982.18 2400.7,5926.04C2414.32,5869.9 2432.33,5814.63 2454.75,5760.22C2479.38,5699.85 2508.94,5663.22 2543.42,5650.34C2555.51,5645.23 2569.68,5642.81 2585.93,5643.07C2608.18,5643.42 2626.09,5650.59 2639.65,5664.57C2653.2,5678.55 2659.8,5696.82 2659.44,5719.4C2659,5734.93 2655.99,5751.3 2650.39,5768.51C2644.8,5785.73 2635.97,5806.24 2623.89,5830.07L2617.27,5845.32C2585.87,5909.21 2570.06,5948.05 2569.84,5961.84C2569.71,5969.98 2572.47,5974.09 2578.12,5974.18C2583.42,5974.26 2590.37,5970.66 2598.97,5963.38C2607.56,5956.1 2620.86,5942.71 2638.86,5923.21C2650.04,5909.96 2665.87,5893.43 2686.35,5873.62L2706.29,5854.32L2723.56,5836.58C2759.85,5801.83 2789.43,5776.77 2812.33,5761.41C2835.22,5746.06 2854.09,5738.49 2868.95,5738.73C2897.24,5739.18 2911,5763.96 2910.22,5813.05C2910.06,5823.3 2908.53,5841.47 2905.64,5867.57C2900.59,5918.37 2897.79,5961.43 2897.22,5996.75C2897.47,6003.82 2897.63,6010.27 2897.71,6016.1C2897.8,6021.93 2897.76,6029.44 2897.62,6038.62C2899.71,6062.33 2901.19,6080.55 2902.05,6093.28C2904.2,6113.45 2905.28,6123.54 2905.28,6123.54C2905.11,6134.14 2895.42,6143.35 2876.22,6151.17C2857.01,6158.99 2834.87,6162.7 2809.79,6162.3C2786.83,6161.93 2767.21,6157.12 2750.93,6147.85C2734.65,6138.58 2722.41,6125.05 2714.21,6107.25C2706.02,6089.45 2702.12,6067.84 2702.53,6042.41C2702.58,6039.23 2703.02,6033.67 2703.85,6025.73C2704.68,6017.8 2705.56,6007.48 2706.47,5994.77Z" />
                        <path d="M3111.71,6185.36C3132.55,6184.17 3151.47,6173.9 3168.48,6154.53C3185.49,6135.17 3193.93,6114.19 3193.78,6091.58C3193.69,6076.04 3188.49,6063.7 3178.18,6054.58C3167.16,6043.7 3142.54,6033.08 3104.32,6022.73C3048.05,6006.83 3011.37,5988.87 2994.29,5968.84C2978.29,5952.69 2970.22,5933.31 2970.07,5910.7C2969.82,5870.08 2984.31,5829.36 3013.55,5788.55C3042.79,5747.73 3080.29,5714.2 3126.05,5687.94C3171.81,5661.69 3218.01,5648.41 3264.64,5648.12C3287.25,5647.98 3308.48,5653.14 3328.33,5663.61C3348.18,5674.09 3363.99,5688.03 3375.75,5705.44C3387.52,5722.86 3393.47,5741.81 3393.6,5762.3C3393.73,5782.43 3387.5,5803.32 3374.92,5824.94C3362.34,5846.57 3346.47,5864.6 3327.31,5879.03C3308.14,5893.46 3289.91,5900.73 3272.6,5900.84C3262.7,5900.9 3254.12,5898.84 3246.86,5894.64C3239.59,5890.45 3235.94,5885.88 3235.91,5880.94C3235.87,5875.99 3237.24,5868.74 3240.01,5859.18C3247.59,5828.75 3251.31,5802.23 3251.16,5779.62C3251.02,5757.37 3244.18,5736.39 3230.63,5716.69C3213.39,5728.8 3202.15,5738.4 3196.89,5745.49C3183.57,5761.1 3173.26,5778.81 3165.97,5798.63C3157.97,5818.79 3154.03,5837.87 3154.14,5855.87C3154.22,5868.57 3157.21,5878.7 3163.1,5886.25C3169,5893.8 3178.59,5900.19 3191.87,5905.41C3205.14,5910.64 3225.22,5916.35 3252.11,5922.55C3297.04,5933.23 3328.71,5943.64 3347.14,5953.78C3351.39,5956.22 3357.96,5961.3 3366.83,5969.02C3380.34,5983.42 3387.17,6002.11 3387.31,6025.09C3387.47,6049.47 3380.03,6074.17 3365,6099.18C3349.96,6124.19 3326.63,6150.05 3295.01,6176.75C3261.28,6205.59 3227.67,6226.31 3194.19,6238.89C3160.7,6251.47 3123.65,6257.89 3083.02,6258.15C3043.81,6258.39 3012.94,6250.82 2990.41,6235.41C2967.88,6220.01 2956.53,6198.89 2956.36,6172.04C2956.24,6152.96 2963.53,6133.57 2978.25,6113.88C2992.96,6094.18 3011.32,6078.07 3033.32,6065.57C3055.32,6053.07 3076.92,6046.75 3098.11,6046.61C3114.01,6046.51 3121.98,6049.99 3122.03,6057.06C3122.05,6060.59 3119.79,6066.44 3115.25,6074.59C3101.63,6099.4 3094.88,6122.23 3095.01,6143.08C3095.11,6157.91 3100.67,6172.01 3111.71,6185.36Z" />
                        <path d="M3700.81,5743.91L3678.25,5752.98C3595.65,5783.42 3534.57,5799.17 3495.02,5800.21C3468.18,5800.91 3454.45,5789.43 3453.83,5765.77C3453.48,5752.71 3457.08,5738.12 3464.6,5722.02C3472.13,5705.92 3481.22,5692.25 3491.89,5681.02C3504.94,5666.89 3517.23,5656.94 3528.74,5651.16C3540.25,5645.38 3554.83,5642.26 3572.49,5641.79C3578.49,5641.63 3585.29,5641.54 3592.89,5641.52C3600.49,5641.5 3609.23,5641.53 3619.13,5641.62C3689.13,5642.61 3736.06,5643.41 3759.93,5644.02C3783.8,5644.63 3802.84,5646.16 3817.04,5648.61C3829.11,5650.77 3838.67,5654.85 3845.72,5660.85C3852.77,5666.85 3856.39,5673.55 3856.59,5680.97C3857.18,5703.57 3798.08,5807.96 3679.29,5994.15L3660.45,6023.8L3685.35,6023.14C3730.56,6021.95 3773.78,6012.51 3815.01,5994.82C3825.51,5991.01 3832,5989.07 3834.47,5989.01C3845.42,5988.72 3851.14,5997.93 3851.63,6016.65C3852.44,6047.37 3844.96,6075.58 3829.21,6101.26C3813.45,6126.94 3791.19,6147.32 3762.43,6162.38C3733.67,6177.45 3701.81,6185.45 3666.85,6186.37C3623.41,6187.51 3583.85,6184.66 3548.15,6177.82C3512.45,6170.99 3484.18,6160.86 3463.33,6147.45C3442.48,6134.04 3431.83,6118.69 3431.37,6101.38C3431.13,6092.2 3435.17,6081.23 3443.5,6068.46C3451.82,6055.7 3468.69,6035.38 3494.11,6007.5C3498.21,6002.09 3507.63,5991.06 3522.39,5974.42L3539.39,5955.42L3557.36,5933.21L3569.66,5917.51L3582.55,5903.39C3612.03,5869.05 3636.85,5838.35 3656.99,5811.32C3664.16,5801.94 3670.47,5793.21 3675.91,5785.11C3681.36,5777.02 3690.38,5763.97 3702.98,5745.97L3700.81,5743.91Z" />
                        <path d="M4077.98,5974.34C4093.7,5962.65 4105.55,5951.14 4113.51,5939.8C4131.15,5915.99 4144.39,5889.03 4153.25,5858.91C4160.47,5839.13 4165.81,5817.13 4169.28,5792.92C4172.75,5768.71 4174.01,5746.19 4173.04,5725.37C4172.14,5705.96 4167.63,5696.45 4159.51,5696.82C4148.22,5697.35 4132.08,5723.03 4111.1,5773.87C4098.73,5804.51 4088.92,5834.94 4081.66,5865.16C4074.4,5895.38 4071.27,5921.25 4072.27,5942.78C4072.61,5950.19 4074.52,5960.71 4077.98,5974.34ZM4079.83,5991.23C4084.69,6012.23 4098.95,6022.17 4122.59,6021.07C4149.06,6019.84 4182.74,6002.72 4223.65,5969.7C4247.51,5950.55 4263.68,5940.78 4272.15,5940.39C4282.74,5939.9 4292.75,5942.26 4302.19,5947.48C4311.62,5952.7 4316.48,5958.31 4316.76,5964.31C4317.06,5970.66 4312.32,5979.19 4302.57,5989.9C4284.73,6009.47 4264.05,6028.73 4240.53,6047.69C4217.01,6066.64 4194.23,6082.55 4172.2,6095.42C4150.16,6108.29 4128.01,6118.69 4105.74,6126.63C4083.48,6134.56 4063.53,6138.93 4045.88,6139.75C4001.77,6141.8 3965.89,6130.83 3938.25,6106.82C3910.61,6082.82 3895.82,6049.82 3893.87,6007.83C3892.38,5975.72 3897.66,5939.13 3909.72,5898.08C3921.78,5857.03 3938.82,5818.3 3960.82,5781.92C3986.78,5739.33 4019.41,5703.34 4058.72,5673.92C4107.29,5638.42 4154.51,5619.61 4200.38,5617.48C4233.56,5615.94 4260.07,5625.22 4279.93,5645.34C4299.78,5665.46 4310.56,5693.87 4312.27,5730.57C4313.59,5759.16 4307.48,5789.33 4293.93,5821.08C4280.37,5852.83 4259.61,5883.68 4231.65,5913.62C4208.77,5938.73 4186.08,5958.53 4163.59,5973.02C4141.1,5987.5 4121.21,5995.14 4103.92,5995.95C4096.15,5996.31 4088.12,5994.74 4079.83,5991.23Z" />

                        <path d="M4442.41,6125.34C4426.49,6125.28 4411.6,6118.96 4397.73,6106.38C4383.81,6093.1 4373.61,6078.43 4367.12,6062.38C4360.63,6046.33 4356.57,6025.26 4354.92,5999.17C4351.26,5941 4357.97,5874.65 4375.04,5800.12C4392.12,5725.6 4413.37,5671.07 4438.8,5636.55C4448.86,5622.11 4463.58,5614.29 4482.97,5613.07C4503.41,5611.78 4520.48,5620.08 4534.17,5637.98C4547.86,5655.87 4555.66,5679.98 4557.57,5710.3C4560.39,5755.07 4557.24,5807.92 4548.14,5868.84C4539.03,5929.76 4524.86,5993.39 4505.62,6059.73C4498.11,6086.41 4487.95,6104.76 4475.15,6114.78C4466.35,6121 4455.78,6124.5 4443.46,6125.27L4442.41,6125.34ZM4472.51,5589.83C4439.3,5590.86 4421.47,5571.98 4419.03,5533.2C4417.81,5513.81 4421.24,5491.03 4429.33,5464.85C4437.41,5438.68 4447.24,5419.04 4458.8,5405.92C4464.73,5398.82 4470.86,5393.66 4477.21,5390.43C4483.55,5387.19 4491.84,5385.26 4502.06,5384.61C4519.69,5383.5 4532.92,5387.01 4541.75,5395.12C4550.58,5403.24 4555.62,5417.35 4556.89,5437.44C4558.47,5462.48 4555.64,5486.46 4548.41,5509.39C4541.18,5532.32 4530.78,5551.21 4517.2,5566.04C4503.62,5580.88 4489.25,5588.78 4474.09,5589.73L4472.51,5589.83Z" />
                        <path d="M4696.9,5589.21L4698.52,5582.71C4716.67,5515.38 4733.17,5467.67 4748,5439.58C4755.12,5426.27 4765.53,5414.11 4779.21,5403.12C4805.02,5383.74 4829.91,5373.12 4853.88,5371.24C4867.99,5370.14 4878.99,5372.47 4886.89,5378.24C4894.79,5384.01 4899.21,5392.89 4900.15,5404.88C4900.78,5412.99 4896.76,5429.95 4888.08,5455.74C4873.25,5498.7 4862.83,5538.66 4856.8,5575.63C4862.85,5575.86 4868.75,5576.46 4874.51,5577.43C4895.91,5578.95 4910.13,5581.47 4917.14,5585C4924.16,5588.53 4928.08,5595.58 4928.91,5606.14C4930.37,5624.82 4926.96,5642.45 4918.7,5659.05C4910.43,5675.65 4898.85,5688.25 4883.94,5696.86C4872.74,5703.05 4854.19,5708.05 4828.28,5711.84C4824.82,5725.94 4821.25,5745.19 4817.55,5769.59C4816.07,5790.97 4814.87,5820.49 4813.96,5858.14C4812.91,5872.03 4812.86,5884.96 4813.79,5896.93C4818.14,5952.53 4847.26,5978.23 4901.15,5974.02L4905.9,5973.65C4912.24,5973.15 4915.49,5973.96 4915.66,5976.07C4916.1,5981.71 4910.86,5991.69 4899.93,6006.01C4889,6020.32 4876.71,6033.16 4863.07,6044.5C4848.4,6056.28 4832.14,6066.05 4814.3,6073.82C4796.45,6081.6 4780.11,6086.06 4765.3,6087.22C4728.24,6090.11 4697.18,6079.96 4672.12,6056.76C4647.05,6033.56 4632.9,6001.36 4629.69,5960.15C4628.31,5942.54 4629.59,5919.23 4633.52,5890.22C4637.46,5861.21 4644.07,5822.25 4653.36,5773.33C4654.81,5764.71 4656.4,5755.64 4658.14,5746.12C4659.87,5736.59 4660.85,5730.93 4661.06,5729.15C4646.95,5729.89 4636.68,5727.68 4630.25,5722.52C4623.82,5717.35 4620.11,5708.43 4619.12,5695.75C4617.39,5673.56 4624.29,5651.94 4639.83,5630.88C4655.37,5609.82 4674.39,5595.93 4696.9,5589.21Z" />
                    </g>

                    <g id="slogan" transform="matrix(0.561737,0,0,0.561737,456.289,2117.1)">
                        <path d="M1127.15,5916.47L1220.93,5258.13L1298.69,5258.13C1420.59,5258.13 1515.46,5287.43 1583.32,5346.02C1651.18,5404.61 1685.11,5485.43 1685.11,5588.48C1685.11,5687.76 1655.27,5767.24 1595.58,5826.93C1535.88,5886.62 1451.22,5916.47 1341.57,5916.47L1127.15,5916.47ZM1298.21,5337.3L1227.79,5838.24L1306.9,5838.24C1381.93,5838.24 1437.5,5829.21 1473.61,5811.15C1509.71,5793.08 1538.36,5764.57 1559.55,5725.61C1580.74,5686.66 1591.34,5640 1591.34,5585.65C1591.34,5507.74 1564.99,5446.87 1512.29,5403.04C1459.59,5359.22 1398.27,5337.3 1328.33,5337.3L1298.21,5337.3Z" />
                        <path d="M2096.99,5803.37L2085.2,5881.6C2041.22,5913.96 1993,5930.14 1940.53,5930.14C1885.87,5930.14 1841.96,5911.05 1808.82,5872.88C1775.67,5834.71 1759.1,5783.89 1759.1,5720.43C1759.1,5649.74 1778.97,5590.29 1818.71,5542.06C1858.45,5493.84 1907.07,5469.73 1964.57,5469.73C2008.55,5469.73 2045.15,5486.61 2074.37,5520.38C2103.58,5554.16 2118.19,5597.75 2118.19,5651.16C2118.19,5664.35 2117.25,5677.86 2115.37,5691.68L1844.87,5691.68C1842.35,5706.14 1841.1,5719.96 1841.1,5733.15C1841.1,5773.05 1852.02,5804.55 1873.85,5827.64C1895.68,5850.73 1923.1,5862.28 1956.08,5862.28C1996.3,5862.28 2043.26,5842.64 2096.99,5803.37ZM1857.48,5634.66L2039.02,5634.66C2039.02,5604.5 2032.19,5580.7 2018.51,5563.27C2004.84,5545.83 1985.59,5537.11 1960.75,5537.11C1913.6,5537.11 1879.17,5569.63 1857.48,5634.66Z" />
                        <path d="M2236.95,5347.2C2236.95,5334 2241.58,5322.77 2250.85,5313.51C2260.12,5304.24 2271.19,5299.6 2284.07,5299.6C2296.95,5299.6 2308.03,5304.24 2317.3,5313.51C2326.56,5322.77 2331.2,5334 2331.2,5347.2C2331.2,5360.08 2326.56,5371.15 2317.3,5380.42C2308.03,5389.69 2296.95,5394.32 2284.07,5394.32C2271.19,5394.32 2260.12,5389.69 2250.85,5380.42C2241.58,5371.15 2236.95,5360.08 2236.95,5347.2ZM2309.84,5482.92L2249.05,5916.47L2167.2,5916.47L2227.99,5482.92L2309.84,5482.92Z" />
                        <path d="M2498.35,5482.92L2487.34,5559.62L2489.54,5561.15C2535.72,5504.6 2583.62,5476.32 2633.25,5476.32C2666.87,5476.32 2692.95,5488.65 2711.48,5513.32C2730.01,5537.98 2739.28,5569.79 2739.28,5608.74C2739.28,5619.74 2738.34,5631.21 2736.45,5643.15L2694.89,5916.47L2613.95,5916.47L2653.53,5640.32C2655.1,5630.58 2655.89,5621.62 2655.89,5613.46C2655.89,5590.84 2651.16,5573.56 2641.72,5561.62C2632.26,5549.68 2620.45,5543.71 2606.28,5543.71C2598.08,5543.71 2588.87,5545.75 2578.63,5549.83C2568.39,5553.91 2557.45,5560.19 2545.79,5568.67C2534.13,5577.14 2519.72,5590.01 2502.55,5607.28C2485.38,5624.54 2476.45,5635.55 2475.77,5640.3L2436.13,5916.47L2355.23,5916.47L2416.02,5482.92L2498.35,5482.92Z" />

                        <path d="M3174.74,5258.13L3293.49,5258.13C3380.51,5258.13 3439.58,5275.4 3470.68,5309.93C3501.78,5344.47 3517.34,5386.69 3517.34,5436.61C3517.34,5475.23 3505.55,5508.9 3481.99,5537.63C3458.43,5566.36 3425.28,5586.37 3382.56,5597.67C3402.04,5610.28 3420.26,5634.54 3437.22,5670.48L3555.03,5916.47L3460.99,5916.47L3385.51,5759.96C3361.6,5710.65 3341.31,5676.03 3324.63,5656.09C3307.96,5636.15 3282.48,5626.18 3248.18,5626.18L3213.27,5626.18L3172.78,5916.47L3082.37,5916.47L3174.74,5258.13ZM3253.68,5336.36L3225.13,5547.95L3271.32,5547.95C3321.28,5547.95 3359.22,5537.51 3385.14,5516.61C3411.07,5495.72 3424.03,5467.53 3424.03,5432.03C3424.03,5368.25 3384.39,5336.36 3305.12,5336.36L3253.68,5336.36Z" />

                        <path d="M3934.39,5803.37L3922.61,5881.6C3878.63,5913.96 3830.4,5930.14 3777.94,5930.14C3723.27,5930.14 3679.37,5911.05 3646.22,5872.88C3613.08,5834.71 3596.51,5783.89 3596.51,5720.43C3596.51,5649.74 3616.38,5590.29 3656.12,5542.06C3695.86,5493.84 3744.48,5469.73 3801.97,5469.73C3845.95,5469.73 3882.55,5486.61 3911.77,5520.38C3940.99,5554.16 3955.6,5597.75 3955.6,5651.16C3955.6,5664.35 3954.66,5677.86 3952.77,5691.68L3682.27,5691.68C3679.76,5706.14 3678.5,5719.96 3678.5,5733.15C3678.5,5773.05 3689.42,5804.55 3711.25,5827.64C3733.09,5850.73 3760.5,5862.28 3793.49,5862.28C3833.7,5862.28 3880.67,5842.64 3934.39,5803.37ZM3694.89,5634.66L3876.43,5634.66C3876.43,5604.5 3869.59,5580.7 3855.92,5563.27C3842.24,5545.83 3822.99,5537.11 3798.16,5537.11C3751,5537.11 3716.58,5569.63 3694.89,5634.66Z" />

                        <path d="M4074.35,5347.2C4074.35,5334 4078.99,5322.77 4088.26,5313.51C4097.52,5304.24 4108.6,5299.6 4121.48,5299.6C4134.36,5299.6 4145.43,5304.24 4154.7,5313.51C4163.97,5322.77 4168.6,5334 4168.6,5347.2C4168.6,5360.08 4163.97,5371.15 4154.7,5380.42C4145.43,5389.69 4134.36,5394.32 4121.48,5394.32C4108.6,5394.32 4097.52,5389.69 4088.26,5380.42C4078.99,5371.15 4074.35,5360.08 4074.35,5347.2ZM4147.25,5482.92L4086.46,5916.47L4004.61,5916.47L4065.4,5482.92L4147.25,5482.92Z" />

                        <path d="M4475.86,5514.97L4475.86,5600.73C4425.9,5562.72 4382.39,5543.71 4345.32,5543.71C4328.67,5543.71 4314.69,5548.19 4303.38,5557.14C4292.07,5566.1 4286.41,5576.86 4286.41,5589.42C4286.41,5597.59 4289.95,5606.31 4297.02,5615.58C4304.09,5624.84 4326.39,5642.05 4363.94,5667.18C4401.48,5692.31 4426.77,5715.4 4439.81,5736.45C4452.85,5757.5 4459.36,5778.86 4459.36,5800.54C4459.36,5838.56 4446.72,5869.66 4421.43,5893.85C4396.14,5918.04 4364.02,5930.14 4325.06,5930.14C4276.99,5930.14 4226.88,5911.13 4174.73,5873.11L4188.87,5793.94C4242.9,5836.99 4287.36,5858.51 4322.23,5858.51C4338.57,5858.51 4352,5853.95 4362.52,5844.83C4373.05,5835.72 4378.31,5824.24 4378.31,5810.41C4378.31,5800.04 4374.47,5789.43 4366.79,5778.58C4359.1,5767.73 4336.73,5749.43 4299.65,5723.67C4262.58,5697.91 4238.07,5674.98 4226.12,5654.87C4214.16,5634.77 4208.19,5614.51 4208.19,5594.1C4208.19,5556.72 4220.6,5526.65 4245.42,5503.88C4270.24,5481.11 4303.22,5469.73 4344.38,5469.73C4387.73,5469.73 4431.56,5484.81 4475.86,5514.97Z" />

                        <path d="M4880.19,5803.37L4868.41,5881.6C4824.43,5913.96 4776.2,5930.14 4723.74,5930.14C4669.07,5930.14 4625.17,5911.05 4592.02,5872.88C4558.88,5834.71 4542.3,5783.89 4542.3,5720.43C4542.3,5649.74 4562.18,5590.29 4601.92,5542.06C4641.66,5493.84 4690.28,5469.73 4747.77,5469.73C4791.75,5469.73 4828.35,5486.61 4857.57,5520.38C4886.79,5554.16 4901.4,5597.75 4901.4,5651.16C4901.4,5664.35 4900.45,5677.86 4898.57,5691.68L4628.07,5691.68C4625.56,5706.14 4624.3,5719.96 4624.3,5733.15C4624.3,5773.05 4635.22,5804.55 4657.05,5827.64C4678.89,5850.73 4706.3,5862.28 4739.29,5862.28C4779.5,5862.28 4826.47,5842.64 4880.19,5803.37ZM4640.69,5634.66L4822.23,5634.66C4822.23,5604.5 4815.39,5580.7 4801.72,5563.27C4788.04,5545.83 4768.79,5537.11 4743.95,5537.11C4696.8,5537.11 4662.38,5569.63 4640.69,5634.66Z" />

                        <path d="M5130.72,5258.13L5095.76,5517.76C5127.21,5485.73 5162.43,5469.73 5201.43,5469.73C5246.09,5469.73 5282.64,5488.03 5311.11,5524.62C5339.57,5561.23 5353.8,5608.9 5353.8,5667.65C5353.8,5744.31 5329.61,5807.22 5281.23,5856.39C5232.84,5905.55 5163.1,5930.14 5071.99,5930.14C5027.06,5930.14 4988.73,5927.78 4957.01,5923.07L5047.01,5258.13L5130.72,5258.13ZM5046.08,5862.28L5091.32,5862.28C5146.61,5862.28 5190.19,5844.53 5222.08,5809.03C5253.97,5773.52 5269.91,5725.77 5269.91,5665.77C5269.91,5626.49 5261.57,5595.86 5244.87,5573.87C5228.17,5551.88 5205.17,5540.88 5175.88,5540.88C5157.29,5540.88 5137.76,5546.29 5117.28,5557.11C5096.8,5567.92 5085.5,5580.87 5083.39,5595.97L5046.08,5862.28Z" />

                        <path d="M5755.77,5803.37L5743.99,5881.6C5700.01,5913.96 5651.78,5930.14 5599.32,5930.14C5544.65,5930.14 5500.75,5911.05 5467.6,5872.88C5434.46,5834.71 5417.89,5783.89 5417.89,5720.43C5417.89,5649.74 5437.76,5590.29 5477.5,5542.06C5517.24,5493.84 5565.86,5469.73 5623.35,5469.73C5667.34,5469.73 5703.94,5486.61 5733.15,5520.38C5762.37,5554.16 5776.98,5597.75 5776.98,5651.16C5776.98,5664.35 5776.04,5677.86 5774.15,5691.68L5503.65,5691.68C5501.14,5706.14 5499.89,5719.96 5499.89,5733.15C5499.89,5773.05 5510.8,5804.55 5532.64,5827.64C5554.47,5850.73 5581.88,5862.28 5614.87,5862.28C5655.08,5862.28 5702.05,5842.64 5755.77,5803.37ZM5516.27,5634.66L5697.81,5634.66C5697.81,5604.5 5690.97,5580.7 5677.3,5563.27C5663.63,5545.83 5644.37,5537.11 5619.54,5537.11C5572.38,5537.11 5537.96,5569.63 5516.27,5634.66Z" />

                        <path d="M6233.15,5482.92L6224.67,5547.01L6140.79,5547.01C6159.95,5574.03 6169.53,5602.62 6169.53,5632.78C6169.53,5667.34 6161.76,5697.81 6146.2,5724.2C6130.65,5750.59 6111.65,5769.2 6089.18,5780.04C6066.72,5790.88 6037.74,5799.52 6002.24,5805.96C5966.74,5812.4 5944.27,5818.84 5934.85,5825.28C5925.42,5831.72 5920.71,5839.34 5920.71,5848.14C5920.71,5854.74 5924.8,5860.78 5932.96,5866.28C5941.13,5871.78 5970.59,5880.65 6021.33,5892.89C6072.07,5905.12 6107.57,5921.53 6127.83,5942.12C6148.09,5962.7 6158.22,5986.97 6158.22,6014.94C6158.22,6050.13 6141.57,6079.51 6108.27,6103.08C6074.97,6126.65 6032.71,6138.43 5981.5,6138.43C5926.52,6138.43 5881.36,6127.75 5846.02,6106.38C5810.68,6085.02 5793,6058.32 5793,6026.27C5793,5984.49 5834.63,5954.64 5917.88,5936.73C5867.62,5918.2 5842.48,5892.75 5842.48,5860.39C5842.48,5843.74 5850.18,5828.11 5865.57,5813.5C5880.97,5798.89 5901.86,5787.82 5928.25,5780.28C5876.1,5755.46 5850.02,5713.99 5850.02,5655.87C5850.02,5607.17 5865.81,5566.17 5897.39,5532.87C5928.96,5499.57 5966.89,5482.92 6011.19,5482.92L6233.15,5482.92ZM6006.48,5737.87C6031.3,5737.87 6051.64,5727.73 6067.51,5707.47C6083.37,5687.21 6091.3,5663.57 6091.3,5636.55C6091.3,5611.1 6084,5590.29 6069.39,5574.11C6054.78,5557.93 6036.32,5549.84 6014.02,5549.84C5992.03,5549.84 5972.23,5560.05 5954.64,5580.47C5937.05,5600.89 5928.25,5624.14 5928.25,5650.21C5928.25,5675.66 5935.64,5696.63 5950.4,5713.12C5965.17,5729.62 5983.86,5737.87 6006.48,5737.87ZM5988.1,6076.69C6016.06,6076.69 6038.37,6071.67 6055.02,6061.61C6071.67,6051.56 6079.99,6038.52 6079.99,6022.5C6079.99,6006.79 6066.33,5992.58 6038.99,5979.85C6011.66,5967.13 5993.13,5960.77 5983.39,5960.77C5971.14,5960.77 5949.38,5967.29 5918.12,5980.32C5886.86,5993.36 5871.23,6008.05 5871.23,6024.39C5871.23,6040.41 5881.68,6053.13 5902.57,6062.56C5923.46,6071.98 5951.97,6076.69 5988.1,6076.69Z" />

                        <path d="M6412.57,5258.13L6319.72,5916.47L6237.86,5916.47L6330.7,5258.13L6412.57,5258.13Z" />

                        <path d="M6771.79,5803.37L6760.01,5881.6C6716.03,5913.96 6667.8,5930.14 6615.34,5930.14C6560.67,5930.14 6516.77,5911.05 6483.62,5872.88C6450.48,5834.71 6433.9,5783.89 6433.9,5720.43C6433.9,5649.74 6453.77,5590.29 6493.52,5542.06C6533.26,5493.84 6581.88,5469.73 6639.37,5469.73C6683.35,5469.73 6719.95,5486.61 6749.17,5520.38C6778.39,5554.16 6793,5597.75 6793,5651.16C6793,5664.35 6792.05,5677.86 6790.17,5691.68L6519.67,5691.68C6517.16,5706.14 6515.9,5719.96 6515.9,5733.15C6515.9,5773.05 6526.82,5804.55 6548.65,5827.64C6570.49,5850.73 6597.9,5862.28 6630.89,5862.28C6671.1,5862.28 6718.07,5842.64 6771.79,5803.37ZM6532.28,5634.66L6713.83,5634.66C6713.83,5604.5 6706.99,5580.7 6693.32,5563.27C6679.64,5545.83 6660.39,5537.11 6635.55,5537.11C6588.4,5537.11 6553.98,5569.63 6532.28,5634.66Z" />

                        <path d="M6911.75,5347.2C6911.75,5334 6916.39,5322.77 6925.65,5313.51C6934.92,5304.24 6945.99,5299.6 6958.88,5299.6C6971.76,5299.6 6982.83,5304.24 6992.1,5313.51C7001.37,5322.77 7006,5334 7006,5347.2C7006,5360.08 7001.37,5371.15 6992.1,5380.42C6982.83,5389.69 6971.76,5394.32 6958.88,5394.32C6945.99,5394.32 6934.92,5389.69 6925.65,5380.42C6916.39,5371.15 6911.75,5360.08 6911.75,5347.2ZM6984.65,5482.92L6923.86,5916.47L6842.01,5916.47L6902.8,5482.92L6984.65,5482.92Z" />

                        <path d="M7276.5,5482.92L7267.59,5547.01L7181.34,5547.01L7139.21,5784.02C7137.01,5795.96 7135.91,5806.02 7135.91,5814.19C7135.91,5842.48 7151.17,5856.62 7181.68,5856.62C7204.32,5856.62 7230.75,5847.98 7260.95,5830.7L7256.24,5910.82C7226.07,5923.7 7196.07,5930.14 7166.23,5930.14C7130.73,5930.14 7102.69,5921.1 7082.11,5903.04C7061.53,5884.98 7051.24,5861.18 7051.24,5831.65C7051.24,5824.42 7051.92,5817.02 7053.28,5809.44L7098.82,5547.01L7022.49,5547.01L7032.47,5482.92L7111.72,5482.92L7127.58,5394.32L7208.49,5394.32L7192.74,5482.92L7276.5,5482.92Z" />

                        <path d="M7646.9,5803.37L7635.12,5881.6C7591.14,5913.96 7542.91,5930.14 7490.45,5930.14C7435.78,5930.14 7391.88,5911.05 7358.73,5872.88C7325.59,5834.71 7309.02,5783.89 7309.02,5720.43C7309.02,5649.74 7328.89,5590.29 7368.63,5542.06C7408.37,5493.84 7456.99,5469.73 7514.48,5469.73C7558.46,5469.73 7595.06,5486.61 7624.28,5520.38C7653.5,5554.16 7668.11,5597.75 7668.11,5651.16C7668.11,5664.35 7667.16,5677.86 7665.28,5691.68L7394.78,5691.68C7392.27,5706.14 7391.01,5719.96 7391.01,5733.15C7391.01,5773.05 7401.93,5804.55 7423.77,5827.64C7445.6,5850.73 7473.01,5862.28 7506,5862.28C7546.21,5862.28 7593.18,5842.64 7646.9,5803.37ZM7407.4,5634.66L7588.94,5634.66C7588.94,5604.5 7582.1,5580.7 7568.43,5563.27C7554.75,5545.83 7535.5,5537.11 7510.67,5537.11C7463.51,5537.11 7429.09,5569.63 7407.4,5634.66Z" />
                        <path d="M7873.43,5482.92L7860.7,5565.39L7862.59,5567.27C7888.37,5530.52 7908.81,5506.17 7923.91,5494.23C7939,5482.29 7956.93,5476.32 7977.68,5476.32C7990.58,5476.32 8002.53,5478.52 8013.53,5482.92L8013.53,5575.76C7996.24,5566.02 7979.42,5561.15 7963.07,5561.15C7947.03,5561.15 7932.72,5565.15 7920.14,5573.16C7907.56,5581.18 7892.31,5598.3 7874.39,5624.53C7856.47,5650.76 7847.19,5666.71 7846.57,5672.36L7812.64,5916.47L7730.78,5916.47L7791.58,5482.92L7873.43,5482.92Z" />
                    </g>

                </svg>

            </div>
        </header>
    )
};

export default Header;