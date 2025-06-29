'use client';

export default function SupportSection() {
  return (
    <section className="relative min-h-screen bg-[#101923] text-white font-['Space_Grotesk','Noto_Sans',sans-serif] overflow-x-hidden">
      <div className="layout-container flex flex-col px-10 py-5">
        <div className="flex flex-col gap-3 p-4 max-w-[960px] mx-auto">
          <div className="flex min-w-72 flex-col gap-3">
           <p className="tracking-light text-[32px] font-bold leading-tight">
  Need Help? We&apos;re here to help!
</p>

<p className="text-[#90aacb] text-sm font-normal">
  We&apos;re committed to providing you with the best possible experience. If you have any questions, encounter any issues, or simply want to share your thoughts, please
  don&apos;t hesitate to reach out. Your feedback is invaluable to us as we continue to improve InfinityAR.
</p>

          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 px-4">Contact Us</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <SupportCard icon="Bug" title="Report a Bug" />
            <SupportCard icon="Plus" title="Suggest a Feature" />
            <SupportCard icon="UsersThree" title="Join Our Testers Community" />
          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 px-4">Troubleshooting</h2>
          <div className="flex items-center gap-4 px-4 min-h-14 justify-between bg-[#101923]">
            <p className="text-base font-normal truncate">Common Troubleshooting FAQs</p>
            <div className="shrink-0">
              <svg className="text-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </div>
          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.015em] pt-5 px-4">Contact Details</h2>
          <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
            <ContactRow label="Email" value="support@infinityar.com" />
            <ContactRow label="Website" value="infinityar.com" />
            <ContactRow label="Telegram" value="t.me/InfinityAR999" />
            {/* <ContactRow label="Discord" value="Discord Community" /> */}
          </div>

          <div className="flex justify-end px-5 pb-5">
            <button className="flex items-center gap-4 h-14 px-5 bg-[#3d8ff4] rounded-xl font-bold text-white">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
              </svg>
              <span className="truncate">Need Help?</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportCard({ icon, title }) {
  return (
    <div className="flex gap-3 rounded-lg border border-[#314a68] bg-[#182534] p-4 items-center">
      <div className="text-white">
        <span className="material-icons-outlined">{icon}</span>
      </div>
      <h2 className="text-base font-bold leading-tight">{title}</h2>
    </div>
  );
}

function ContactRow({ label, value }) {
  return (
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#314a68] py-5">
      <p className="text-[#90aacb] text-sm font-normal">{label}</p>
      <p className="text-white text-sm font-normal">{value}</p>
    </div>
  );
}
