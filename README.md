# Node.js

## Node.js nedir? 

Node.js, JavaScript’dir.
Web tarayıcılarına muhtaç kalmadan heryerde çalışabilir.

Temelde iki şeye yarar. 

1. Bir yazılımın hem arkayüz (backend) hem önyüz (frontend) kodlarını aynı dilde yazmanın tek yoludur diyecektik ama itiraz edenler çıkacaktır. 
O yüzden en kolay yoludur deyip geçelim.

2. Günümüzde çoğu uygulama, zamanının çoğunu veritabanlarına veya Internet’deki çeşitli servislere istek yapıp gelen sonuçları beklemekle geçirir. 
Node.js, yapı gereği asenkrondur. Beklemeyi hiç sevmez. İstekleri teker teker yapmak yerine paralel olarak yapar. İstekler bittikleri zaman Node’u “geri ararlar” (callback). Bu sayede anlık olarak çok sayıda istek hızlı bir şekilde işlenebilir