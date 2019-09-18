// Bu dersimizde 'package.json' dosyasını, bağımlılıklarımızı ve script'lerimizi öğrenmeye çalışacağız
// package.json
// package.json dosyasını, bizim javascript projelerinin manifestosu gibi düşünebilirsiniz
// Bizim oluşturduğumuz herbir uygulama aslında kendi içinde pakettir
// Ve bu paketin de aslında birden çok pakete ihtiyacı olabilir
// Yani biz aslında bir uygulama geliştirdiğimiz zaman aslında en basit anlamıyla bir tane modül,
// yani bir tane paket oluşturmuş oluyoruz
// ve bu package.json dosyası da, aslında bizim bu oluşturduğumuz uygulamanın ne gibi ekstra paketlere ihtiyaç duyacağını,
// veya bu uygulamanın ne gibi ekstra özelliklere sahip olacağını tutan bir tane json dosyasıdır
// Bir tane uygulama geliştirmek isteyelim
// Bu uygulamamız birden çok pakete bağımlı olabilir
// ve burda uygulamamızın ne gibi paketlere bağımlı olduğunu ve diğer ekstra özelliklerini package.json içerisinde tutabiliriz
// ve biz console'da 'npm init' diyerek aslında package.json'u npm'in oluşturmasını sağlayabiliriz
// Bu komutu kullandığımızda karşımıza belli sorular gelecek
// Şu anda biz bir uygulama yani bir package oluşturmaya çalışıyoruz
// Ve burda ilk başta package'ımızın ismini vermemiz gerekiyor
// Bu package'ınızı yarın bir gün npmjs.com üzerinde yayınlayacaksanız bu package isminizin mutlaka benzersiz bir isme sahip olması gerekir
// Örneğin siz burda bunun ismine mongoose diyemezsiniz
// Çünkü npmjs.com üzerinde zaten bu şekilde bir paket var
// npm bize sorular soruyor ve bu sorulara göre aslında bizim package.json dosyamızı, yani projemizin manifesto dosyasını kendisi oluşturacak
// Şu anda projemizin ilk versiyonu 1.0.0
// Projemize ait description'u giriyoruz
// entry point: projemizin ana dosyasını ifade eder, eğer direkt enter'a basarsak index.js olduğunu kabul etmiş oluruz
// ancak örneğin app.js yazarsak ana dosyanın app.js olduğunu söylemiş olacağız
// Ve daha sonra test komutlarımız var
// Biz projemizde belli testler yazmak istiyor olabiliriz
// Ve bu komutlarımızı buraya girmemiz gerekiyor
// Projemizin git repository'si olabilir
// Projemizin kaynak kodlarının yer aldığı bir github repository'si olabilir
// Ve biz de bunun adresini burada verebiliriz
// Daha sonra npmjs.com üzerinde biz bu projeyi yayınladığımızda örneğin projemizin bulunmasını sağlayacak keyword'leri girebiliriz
// Daha sonra author(yazar) ismini vereceğiz
// Burada unique bir isim vermemiz gerekir ki npmjs.com üzerinde yayınlarken sorun çıkmasın
// Ve daha sonra diyor ki, ben eklediğin bilgilere göre bir tane package.json dosyası oluşturdum
// Bunu oluşturayım mı diye soruyor, yes diyerek bunu onaylıyoruz
// Onayladığımız zaman package.json dosyası gelmiş olucak
// Verdiğimiz bilgilere göre bunun oluştuğunu görebiliyoruz
// Buradan istediğimiz değişiklikleri yapabiliriz
// scripts:
// Büyük projelerimizde terminalden kullanacağımız birçok komut olabilir
// Ve biz bu komutlarımızı sürekli olarak kullanmak istiyor olabiliriz
// Ve aynı zamanda bu komutlarımız çok uzun olursa, biz bu komutlarımızı yazmakta zorlanabiliriz
// O yüzden biz buraya yazacağımız komutları key-value değerlerine göre "scripts"in altında yerleştirebiliriz
// Örneğin az önce package.json'ı oluştururken bizden test komutumuzu istemişti
// Ancak biz projemizde başka komutlarımızı da buraya ekleyebiliriz
// Örneğin console'a echo "Benim adım Süleyman" yazıldığında "Benim adım Süleyman" yazılır
// Ben bu komutumu burdaki scripts'in altına eklemek istiyorum
// Ve bunu da ben burda "suleyman" şeklinde bir key'e göre eklemek istiyorum
// "suleyman"a karşılık gelen komutumuz da "echo 'Benim adım Süleyman'" olmuş olacak
// Ve bu komutumuzu biz çalıştırmış olacağız
// Peki ben bu suleyman'ı nasıl çalıştıracağım?
// Bunun için de npm run şeklinde bir tane komutu kullanıyorum
// npm run package.json'ın içerisine bakacak, scripts'in içerisine bakacak ve burda "suleyman"ı bulursa buna karşılık gelen komutu çalıştıracak


console.log("Bu benim uygulamam");

// Bu sefer de, *node index.js* komutunu scripts'in içerisine start key'ine karşılık gelecek şekilde ekleyelim
// *npm run start* dediğimizde *node index.js* komutu çalışacak

// simple-is paketimizi tekrar yükleyelim
// package.json dosyasına baktığımızda dependencies şeklinde yeni bir key görüyoruz
// buna karşılık gelen değerimiz de yine bir json objemiz
// Ve burda eklediğimiz modülümüz aslında bağımlılık olarak yani dependencies olarak buraya eklenmiş
// Yani biz aslında projemizde hangi modülleri kullanıyorsak bu aynı zamanda buraya "dependencies" olarak da geliyor
// Aynı zamanda bu modülü eklediğimizde package-lock.json dosyası oluştu
// Projemize modül ekledikçe node_modules'ümüz değişecek
// ve aslında package-lock.json da aslında bu node.modules'ün değişimlerini gösteren bir tane lock dosyası gibi düşünebilirsiniz
// Eklediğimiz modüllerin versiyonlarını ve nerelerde bulunduğunu görebiliyoruz
// Bir tane daha modül yükleyelim, mongoose package'ını yükledik
// package.json dosyasında dependencies key'ine karşılık gelen json objesinde bunu görebiliyoruz
// soldaki node_modules'te bunu görebilmemiz için yenilememiz gerekiyor
// package.lock.json dosyası da yine otomatik olarak güncellendi
// Bir modül daha ekleyelim
// Peki bu dependencies'in buraya gelmesindeki amaç ne?
// Neden package.json'ın içerisinde barındırılıyor?
// Siz uygulamalarınızda çok fazla modül barındırmak istiyor olabilirsiniz
// Bu modüllerimiz birbirlerinin bağımlılıklarıyla geliyor
// Mesela mongoose'un çalışması için belki kendi içinde 40 farklı modül geliyor
// Ve sizin bu node_modules'ünüz gittikçe büyüyecek
// Daha büyük projelerde bu node_modules giderek büyüyecek
// Ve siz eğer bu projenizi bir server'a atacaksanız bu node_modules'ü server'a göndermeniz oldukça zorlaşacak
// Peki biz bu durumda ne yapabiliriz?
// Örneğin projemi github sayfasına ya da bir server'a atmak istiyorum
// Biz node_modules klasörünü ve package.lock.json'ı silebiliriz, korkmamıza hiç gerek yok
// Çünkü bizim hangi modüllere ihtiyacımız olduğu package.json'ın içerisindeki dependencies'in altında yer alıyor
// eğer 'npm install' şeklinde bir komutu kullanırsak ve yanına herhangi bir şey girmezsek,
// npm install projemizin package.json'ına bakacak burdaki mongoose'u, nodemailer'ı ve simple-is'yi burdaki dependencies'e göre ekleyecek
// Tekrardan node_modules'ümüz oluştu ve görüntüsü aynı
// Eğer bu npm install diye birşey olmasaydı node_modules'ünüzü kazara silseydiniz belki 100 farklı paketi tek tek indirecektiniz
// Yani eğer siz bir tane proje geliştirecekseniz node_modules'ü server tarafına atmanıza hiç gerek yok
// zaten npm install derseniz dependencies'e göre bu npm install o server tarafında node_modules oluşturarak indirmiş olacak

// son olarak da developement dependency'ye bakalım 
// burdaki dependency'lerimiz geliştirme ortamında da production ortamında da ihtiyacımız olan dependency'lerimiz
// Yani paketlerimiz olacak
// Ancak bizim sadece geliştirme ortamında ihtiyaç duyacağımız paketlerimiz varsa bu paketlerimizi bu sefer,
// dependencies'e göre değil, bu sefer sadece dev-dependencies'e göre kurabiliriz
// yani bu paketlerimiz production kısmına çıktığımızda bir daha indirilmeyecek
// bu paketlere sadece geliştirme ortamında ihtiyacımız olacak
// ve ben bir paketi eğer development dependency olarak eklemek istiyorsam şöyle bir işlem yapmamız gerekir
// --save-dev şeklinde bir komut eklememiz gerekiyor
// yüklendikten sonra package.json'da devDependencies şeklinde bir key'imiz oluştu
// yani siz sadece geliştirme ortamında ihtiyaç duyacağınız package'ları dev-dependency olarak ekleyebiliyoruz

// projemizin github reposunu package.json'a eklemeye çalışacağız
// "repository" şeklinde bir tane daha obje açıyoruz
// type'ı git olacak, yani git versiyon kontrolüne göre eklemeye çalışacağız
// url keyine karşılık olarak repomuzun url'sini vereceğiz
// Şimdi artık sitedeki adımlara göre, github repository'mize dosyalarımızı atabiliriz
// vscode'da bir tane terminal açıyoruz
// terminalimizde bize söylenen komutları gerçekleştirmeye çalışacağız
// örneğin ilk başta echo komutumuzla biz bir tane README oluşturmaya çalışacağız
// Bunu yaptığım zaman benim burdaki klasörümde README.md şeklinde github repository'min md dosyası oluşmuş durumda
// Daha sonra, biz node_modules'ün ya da package-lock.json'ın gönderilmesini istemiyoruz
// ve daha sonra 'git init' diyerek aslında bu klasörümüzün bir git repository'si olduğunu söylememiz gerekiyor
// yani burda git'imizi initialize ediyoruz
// Başlattığımız zaman bizim burda git repository'miz oluşmuş durumda
// Bu esnada farkettiyseniz yeşille bizim dosyalarımız görülmeye başladı
// Ve daha sonra burdaki tüm dosyalarımı repository'ye atmak için 'git add .' şeklinde console'a bir ibare yazmamız gerekir
// Buradaki . tüm klasörlerimizin repoya gideceğini söyleyecek