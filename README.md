# E-Ticaret Mikroservis Projesi

Bu proje, Node.js, Express, MongoDB, Docker ve Nginx kullanılarak oluşturulan bir e-ticaret mikroservis uygulamasını içerir. Mikroservis mimarisi, uygulamanızı küçük, bağımsız hizmetlere böler, böylece geliştirme ve ölçeklendirme kolaylaşır. Bu projede, temel e-ticaret işlevselliklerini uygular.

## Özellikler

- **Mikroservisler:** Proje, ayrı mikroservisler olarak uygulanmıştır. Her bir servis, belirli bir işlevselliği temsil eder ve bağımsız olarak çalışabilir.

- **Node.js ve Express:** Mikroservisler, Node.js ve Express çerçevesi kullanılarak geliştirilmiştir. Bu, hızlı ve hafif API hizmetleri sağlar.

- **Veritabanı:** MongoDB, veri depolama için kullanılmıştır. Her mikroservis kendi veritabanına sahiptir.

- **Docker ve Docker Compose:** Proje, Docker konteynerlerini kullanarak çalıştırılabilir ve ölçeklendirilebilir bir şekilde dağıtılabilir.

- **Nginx:** Nginx, mikroservislerin önünde bir ters proxy olarak kullanılır ve yük dengelemesi sağlar.

## Nasıl Başlanır

Projeyle çalışmaya başlamak için aşağıdaki adımları izleyin:

1. Bu repo'yu klonlayın: `git clone https://github.com/mehmet-dogru/ecommerce-api.git`

2. Gerekli bağımlılıkları yüklemek için her mikroservis klasörüne gidin ve `npm install` komutunu çalıştırın.

3. Docker ve Docker Compose'u yükleyin.

4. Proje kök dizinine gidin ve `docker-compose up -d` komutunu çalıştırarak uygulamayı başlatın.

5. Tarayıcınızda `http://localhost` adresini ziyaret edin ve uygulamayı görüntüleyin.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

---
