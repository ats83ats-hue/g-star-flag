export default function FlagFootballWebsite() {
  const features = [
    {
      title: "はじめてでも安心",
      text: "タックルのないフラッグフットボールだから、未経験の子どもでも安心してスタートできます。",
    },
    {
      title: "京大アメフト部のサポート",
      text: "京都大学アメリカンフットボール部出身のコーチが基礎からサポートします。",
    },
    {
      title: "仲間と挑戦する楽しさ",
      text: "勝ち負けだけではなく、チャレンジする姿勢や協力する力を大切にしています。",
    },
  ];

  const flow = [
    "お問い合わせ・体験申込",
    "体験参加（動きやすい服装でOK）",
    "活動説明・ご案内",
    "入会希望のご連絡",
  ];

  const schedule = [
    { day: "金曜日", time: "17:00 - 19:00", note: "基礎練習・スキル練習" },
    { day: "日曜日", time: "17:00 - 19:00", note: "基礎練習・ゲーム形式" },
  ];

  const googleCalendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FTokyo";

  const members = [
    {
      role: "代表",
      name: "山本 睦",
      bio: "平成4年生まれ。京都大学アメリカンフットボール部コーチ。京大卒業後、日本テレビで政治記者やスポーツディレクターを経験。",
      img: "/member-yamamoto.png"
    },
    {
      role: "コーチ",
      name: "中村 茉莉",
      bio: "現役京大院生。京都大学アメリカンフットボール部ではトレーナーを務める。",
      img: "/member-nakamura.png"
    },
    {
      role: "コーチ",
      name: "山田 太郎（仮）",
      bio: "プロフィール準備中",
      img: "/member-yamada.png"
    },
    {
      role: "トレーニングコーチ",
      name: "南川 太志",
      bio: "平成2年生まれ。プロトレーナー。安全面と体作りをサポート。",
      img: "/member-minamikawa.png"
    }
  ];

  const membershipItems = [
    { label: "入会金", value: "なし" },
    { label: "月会費", value: "2,000円" },
    { label: "ユニフォーム", value: "支給" },
    { label: "保険", value: "スポーツ安全保険に加入" },
    { label: "活動場所", value: "京都市内（北区・左京区エリア）" },
  ];

  const sponsors = [
    { name: "スポンサー募集中", img: "/sponsor1.png" },
    { name: "スポンサー募集中", img: "/sponsor2.png" },
    { name: "スポンサー募集中", img: "/sponsor3.png" }
  ];

  return (
    <div className="min-h-screen bg-white text-green-900">
      <header className="border-b border-green-200 sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/gstar-logo.png" alt="G-STAR logo" className="h-10 w-auto" />
            <div>
              <p className="text-xs tracking-[0.2em] text-green-700">FLAG FOOTBALL</p>
              <h1 className="text-xl md:text-2xl font-bold">G-STAR FLAG FOOTBALL CLUB</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#membership"
              className="rounded-2xl px-5 py-2.5 border border-green-200 text-sm font-medium hover:bg-green-50 transition"
            >
              入会案内
            </a>
            <a
              href="#contact"
              className="rounded-2xl px-5 py-2.5 bg-green-700 text-white text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              体験申込
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">FOR KIDS & STUDENTS</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            はじめての挑戦を、
            <br />
            仲間と一緒に。
          </h2>
          <p className="text-base md:text-lg text-green-800 leading-8 mb-8">
            フラッグフットボールは、走る・考える・協力する楽しさを味わえるスポーツです。
            未経験でも安心して始められ、運動が得意な子も、これから好きになりたい子も参加できます。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-6 py-3 bg-green-700 text-white font-medium shadow-sm hover:opacity-90 transition"
            >
              無料体験に申し込む
            </a>
            <a
              href="#membership"
              className="rounded-2xl px-6 py-3 border border-green-200 font-medium hover:bg-green-50 transition"
            >
              入会案内を見る
            </a>
            <a
              href="#about"
              className="rounded-2xl px-6 py-3 border border-green-200 font-medium hover:bg-green-50 transition"
            >
              チームについて見る
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-green-50 p-8 min-h-[180px] shadow-sm">
            <p className="text-sm text-green-700 mb-3">対象</p>
            <p className="text-2xl font-bold">中学1年生〜高校3年生（男女問わず）</p>
          </div>
          <div className="rounded-3xl bg-green-50 p-8 min-h-[180px] shadow-sm">
            <p className="text-sm text-green-700 mb-3">活動内容</p>
            <p className="text-2xl font-bold">練習・試合・体験会</p>
          </div>
          <div className="rounded-3xl bg-green-50 p-8 min-h-[180px] shadow-sm">
            <p className="text-sm text-green-700 mb-3">大切にすること</p>
            <p className="text-2xl font-bold">挑戦・協力・成長</p>
          </div>
          <div className="rounded-3xl bg-green-50 p-8 min-h-[180px] shadow-sm">
            <p className="text-sm text-green-700 mb-3">体験参加</p>
            <p className="text-2xl font-bold">随時受付中</p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-green-50 border-y border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">ABOUT</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-5">フラッグフットボールを、もっと身近に。</h3>
            <p className="text-green-800 leading-8">
              私たちは、フラッグフットボールを通じて、子どもたちが身体を動かす楽しさと、仲間と考えてプレーする面白さを体験できる場をつくっています。
              スポーツ経験の有無にかかわらず、一人ひとりがチャレンジできる環境を大切にしています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-sm border border-green-200">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-green-800 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">SCHEDULE</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">活動日時</h3>
          <div className="space-y-4">
            {schedule.map((item) => (
              <div key={item.day} className="rounded-3xl border border-green-200 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <p className="text-lg font-bold">{item.day}</p>
                  <p className="text-sm font-medium text-green-700">{item.time}</p>
                </div>
                <p className="text-green-800">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">FLOW</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">体験までの流れ</h3>
          <div className="space-y-4">
            {flow.map((item, index) => (
              <div key={item} className="rounded-3xl bg-green-50 p-6 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <p className="pt-2 text-slate-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 mb-4">MESSAGE</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">まずは一度、体験してみてください。</h3>
            <p className="text-green-100 leading-8">
              新しいスポーツとの出会いが、自信や仲間づくりのきっかけになることがあります。
              まずは気軽に、フラッグフットボールの楽しさを体験しに来てください。
            </p>
          </div>
          <div className="rounded-3xl bg-white text-green-900 p-8 shadow-2xl" id="contact">
            <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">CONTACT</p>
            <h4 className="text-2xl font-bold mb-4">お問い合わせ・体験申込</h4>
            <div className="space-y-3 text-green-800 leading-7">
              <p>以下の内容を入れてご連絡ください。</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>参加者氏名</li>
                <li>学年</li>
                <li>保護者氏名</li>
                <li>希望日程</li>
                <li>ご質問事項</li>
              </ul>
            </div>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-green-50 p-4">
                <p className="text-sm text-green-700">メール</p>
                <a href="mailto:atsushi.yamamoto@smtic.co.jp" className="font-semibold hover:underline">
                  atsushi.yamamoto@smtic.co.jp
                </a>
              </div>
              <div className="rounded-2xl bg-green-50 p-4">
                <p className="text-sm text-green-700 mb-3">公式LINE</p>
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  <div className="flex-1">
                    <a
                      href="https://lin.ee/YmqFqyz"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl px-6 py-3 bg-green-700 text-white font-medium shadow-sm hover:opacity-90 transition"
                    >
                      LINEで問い合わせる
                    </a>
                    <p className="mt-3 text-sm text-green-800 break-all">https://lin.ee/YmqFqyz</p>
                  </div>
                  <div className="shrink-0">
                    <div className="rounded-2xl bg-white border border-green-200 p-3 text-center shadow-sm">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Flin.ee%2FYmqFqyz"
                        alt="G-STAR公式LINE QRコード"
                        className="w-36 h-36 md:w-44 md:h-44 mx-auto"
                      />
                      <p className="mt-2 text-xs text-green-700">QRコードから追加</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="bg-green-50 border-y border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">MEMBERSHIP</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-5">入会案内</h3>
            <p className="text-green-800 leading-8">
              G-STARでは、中学1年生から高校3年生までのメンバーを募集しています。はじめてでも安心してスタートできるよう、基礎から丁寧にサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {membershipItems.map((item) => (
              <div key={item.label} className="rounded-3xl bg-white border border-green-200 p-6 shadow-sm">
                <p className="text-sm text-green-700 mb-2">{item.label}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border border-green-200 p-8 shadow-sm">
              <h4 className="text-xl font-bold mb-4">入会時のご案内</h4>
              <ul className="space-y-3 text-green-800 leading-7 list-disc pl-5">
                <li>入会金はかかりません。</li>
                <li>月会費は2,000円です。</li>
                <li>ユニフォームはチームより支給します。</li>
                <li>活動時の安全面に配慮し、スポーツ安全保険に加入します。</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-green-700 text-white p-8 shadow-sm">
              <h4 className="text-xl font-bold mb-4">入会希望の方へ</h4>
              <p className="text-green-100 leading-8 mb-6">
                まずは体験参加のうえ、活動内容や雰囲気をご確認ください。入会をご希望の場合は、メールまたは公式LINEよりご連絡ください。
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl px-6 py-3 bg-white text-green-900 font-medium shadow-sm hover:opacity-90 transition"
                >
                  お問い合わせへ
                </a>
                <a
                  href="https://lin.ee/YmqFqyz"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-6 py-3 border border-white/40 text-white font-medium hover:bg-white/10 transition"
                >
                  LINEで連絡する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="members" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">MEMBERS</p>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">メンバー紹介</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="rounded-3xl bg-white border border-green-200 p-6 text-center shadow-sm">
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 bg-green-50"
              />
              <p className="text-sm text-green-700">{m.role}</p>
              <p className="font-bold text-lg">{m.name}</p>
              <p className="text-sm text-green-800 mt-2 leading-6">{m.bio}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-green-800">
          ※ 写真は public フォルダに保存すると表示されます
        </p>
      </section>

      <section className="bg-white border-y border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">ORGANIZATION</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">京都スポーツ・プロジェクト株式会社</h3>
          <p className="text-green-800 leading-7 max-w-3xl">
            G-STAR FLAG FOOTBALL CLUB は、京都スポーツ・プロジェクト株式会社が運営しています。
            スポーツを通じた教育・人材育成・コミュニティづくりを目的とし、子どもたちが挑戦し成長できる環境づくりを行っています。
          </p>
        </div>
      </section>

      <section className="bg-green-50 border-y border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">SPONSORS</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-10">スポンサー企業</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sponsors.map((s) => (
              <div key={s.name} className="rounded-3xl bg-white border border-green-200 p-6 flex items-center justify-center h-28">
                <img src={s.img} alt={s.name} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-green-800">
            ※ スポンサーロゴ画像を public フォルダに保存すると表示されます
          </p>
        </div>
      </section>

      <footer className="border-t border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-green-700">
          <p>© 2026 G-STAR FLAG FOOTBALL CLUB</p>
          <p>Flag Football / Kids / Junior / Community</p>
        </div>
      </footer>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm font-semibold tracking-[0.2em] text-green-700 mb-4">CALENDAR</p>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">活動カレンダー</h3>
        <p className="text-green-800 leading-8 mb-8 max-w-3xl">
          Googleカレンダーで、練習日・体験会・試合予定を確認できます。スマートフォンでも見やすく、最新情報に随時更新できます。
        </p>

        <div className="rounded-3xl border border-green-200 bg-white p-3 md:p-4 shadow-sm overflow-hidden">
          <iframe
            src={googleCalendarEmbedUrl}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder="0"
            scrolling="no"
            title="G-STAR Calendar"
            className="rounded-2xl"
          />
        </div>

        <div className="mt-6 rounded-3xl bg-green-50 border border-green-200 p-6">
          <p className="font-bold mb-2">設定方法</p>
          <p className="text-green-800 leading-7">
            Googleカレンダーの公開用URLまたは埋め込みURLを取得し、コード内の
            <span className="font-semibold"> YOUR_CALENDAR_ID </span>
            を差し替えてください。
          </p>
        </div>
      </section>
    </div>
  );
}
