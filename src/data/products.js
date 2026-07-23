const categories = ["Smartphones", "Audio & Sound", "Wearable Tech"];

const imagePool52 = [
  // Smartphones (18 Items)
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1574755393849-623942496936?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1536846862558-b80d25f0dbae?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551645121-d1034da75057?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558885561-56c2a4e2f3bc?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1520189123429-6a76ab9efa90?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60",

  // Audio & Sound (17 Items)
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1558089687-f282ffcbd1d5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1606220532402-1f600e89d71d?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1585231007777-33068007a541?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&auto=format&fit=crop&q=60",

  // Wearable Tech (17 Items)
  "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1629224316170-f604427f56f8?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1533310266094-8898a078049e?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1506224477000-07aa8a76be0f?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60"
];

const namesTemplate = {
  "Smartphones": ["Hyperion Pro X", "Nexus Alpha Device", "Quantum Fluid Frame", "Prism OLED Flagship"],
  "Audio & Sound": ["SonicBoom Wireless Pods", "Studio Over-Ear HD", "Acoustic Pure Soundbar", "BassPulse Sport Buds"],
  "Wearable Tech": ["Horizon Track Band v4", "Titanium Chrono Smart", "Apex Active Pro Guard", "VibeFit Core Sensor"]
};

export const products = [];

for (let i = 1; i <= 52; i++) {
  let cat = categories[(i - 1) % categories.length];
  let baseNameList = namesTemplate[cat];
  let baseName = baseNameList[(i - 1) % baseNameList.length];

  products.push({
    id: `elec_${100 + i}`,
    name: `${baseName} (Model ${i})`,
    price: 49 + ((i * 23) % 450),
    category: cat,
    image: imagePool52[i - 1],
    description: `High-performance ${cat.toLowerCase()} unit engineered with industry-standard protocols. Designed for sandbox testing and GA4 tag measurement.`
  });
}
