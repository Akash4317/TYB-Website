import React from 'react';
import Subheading from '../ui/Subheading';
import './faq.css';
import FaqBG from "@/images/faqbg.png";

const FaqSection = () => {
    return (
        <div>
            <Subheading text='TRADER FAQ' className='text-[#B02430] text-center py-[40px]' />
            {/* <div className='w-full  my-[50px] ' style={{ backgroundImage: `url(${FaqBG})`}}> */}
             <section className="accordion_section md:mt-4">
                <div className="accordion !mt-2 md:mt-7">
                    <div className="accordion-item">
                        <input type="checkbox" id="accordion1" />
                        <label htmlFor="accordion1" className="accordion-item-title">
                            <span className="icon"></span>How can i quickly find Yarn on Yarn Bazaar?
                        </label>
                        <div className="accordion-item-desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quibusdam voluptates ipsa harum exercitationem repellendus. Odio corporis, repellendus eius vitae nisi numquam. Fugiat fugit dolores cum natus consequatur maiores omnis at dolorum est dignissimos, corporis ad id nemo, sint distinctio labore, ab error adipisci temporibus quibusdam modi incidunt in. Minima maxime iure rem eum modi dignissimos optio error quis quam!
                        </div>
                    </div>
                    <div className="accordion-item">
                        <input type="checkbox" id="accordion2" />
                        <label htmlFor="accordion2" className="accordion-item-title">
                            <span className="icon"></span>How do i create an account on Yarn Bazaar?
                        </label>
                        <div className="accordion-item-desc">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui accusamus necessitatibus tenetur modi, similique autem facilis neque culpa, rem sapiente repellendus repudiandae sequi vitae! In temporibus nihil dicta eveniet suscipit. Error ratione atque placeat quisquam asperiores, enim temporibus optio vel! Autem a repudiandae possimus deleniti voluptatibus nihil, cum minima voluptas ipsam delectus et? A sequi cum odio et aspernatur.
                        </div>
                    </div>
                    <div className="accordion-item">
                        <input type="checkbox" id="accordion3" />
                        <label htmlFor="accordion3" className="accordion-item-title">
                            <span className="icon"></span>How do i place an order on Yarn Bazaar?
                        </label>
                        <div className="accordion-item-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti perspiciatis blanditiis sequi adipisci dolorem, excepturi illo porro eaque ut ex nemo doloremque, nobis soluta quidem molestiae rem iure facere architecto temporibus repellat odio beatae magni. Cumque beatae aliquid sed nobis error odit delectus? Enim reprehenderit dolorem totam tenetur, consequuntur vero in possimus aperiam similique rem nihil? Eius, mollitia sed!
                        </div>
                    </div>
                    <div className="accordion-item">
                        <input type="checkbox" id="accordion4" />
                        <label htmlFor="accordion4" className="accordion-item-title">
                            <span className="icon"></span>How do i track my order on Yarn Bazaar?
                        </label>
                        <div className="accordion-item-desc">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque inventore quis, impedit deleniti repudiandae iste nostrum, assumenda sed itaque ut fugiat obcaecati commodi provident error amet minima, corporis sint officiis. Deserunt doloribus dolore eius, obcaecati, omnis saepe reiciendis asperiores voluptas tenetur suscipit blanditiis veniam nemo in numquam. Pariatur repellendus, minus labore corrupti ad totam unde? Veniam porro omnis nostrum corporis?
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </div>
    )
}

export default FaqSection
