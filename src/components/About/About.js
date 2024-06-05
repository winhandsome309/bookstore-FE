import React from "react";

const About = () => {
    return (
        <div className='font-roboto w-full h-auto py-10 px-20 bg-white rounded-xl items-center flex flex-col justify-start gap-1 mt-14'>
            <div className='w-auto h-auto font-extrabold text-3xl text-primary '>
                About Us
            </div>
            <div className='w-auto h-auto font-extrabold text-3xl text-black '>
                Our story from the beginning
            </div>
            <div className='w-auto h-auto font-bold text-xl text-zinc-800 '>
                This is where we tell you all stories about us from the
                beginning till now
            </div>
            <div className='w-full h-auto flex flex-row justify-between gap-2 py-1 px-5'>
                <img
                    src={
                        "https://media.istockphoto.com/id/963186372/vector/flat-design-concept-online-books-store-hand-pick-book-from-internet-device-vector-illustrate.jpg?s=612x612&w=0&k=20&c=Actp37AZcbCtQm_mnFhpwBIYoHrYzrRMbY8iFFMjLIQ="
                    }
                    alt={"News"}
                    width={500}
                    height={400}
                    style={{borderRadius: 10}}
                />
                <div className='w-full flex flex-col justify-start p-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-extrabold text-3xl text-black '>
                            How do we start our book store?
                        </span>
                    </div>
                    <div className='font-normal text-xl  break-all text-justify'>
                        Our bookstore wasn't born out of a business plan or
                        market research. It sprouted from a deep, personal love
                        for books and a desire to share that passion with our
                        community. We envisioned a place where people could lose
                        themselves in captivating stories, discover new worlds,
                        and connect with others who shared their love of the
                        written word. It all began with our love for reading
                        books. This experience ignited a fire within us, a
                        determination to create a space that nurtured the joy of
                        reading. We poured our hearts into selecting a diverse
                        collection of books, from timeless classics to the
                        latest releases, catering to every age group and
                        interest. We believe that bookstores are more than just
                        retail spaces; they're cultural hubs that bring people
                        together. We host book clubs, author events, and reading
                        nights, fostering a sense of connection and shared
                        enthusiasm for literature. We're committed to providing
                        a welcoming atmosphere where bookworms of all stripes
                        can feel comfortable browsing, discussing, and
                        discovering new favorites.
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-row justify-between gap-2 py-1 px-5'>
                <div className='w-full flex flex-col justify-start p-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <span className='font-extrabold text-3xl text-black '>
                            How did we build the branch?
                        </span>
                    </div>
                    <div className='font-normal text-xl  break-all text-justify'>
                        Every day, we're inspired by the interaction with our
                        customers - their excitement over finding a hidden gem,
                        their passionate discussions about a beloved author, or
                        their sheer joy in losing themselves in a compelling
                        narrative. Your love for books fuels our own passion,
                        and we're constantly striving to curate a collection
                        that reflects your interests and keeps you coming back
                        for more. This content personalizes your bookstore's
                        story and highlights the passion that drives your
                        business. Feel free to adapt it further with specific
                        details about your founders, the inspiration behind your
                        store's name, or any unique aspects of your bookselling
                        journey. Ultimately, it's the connections we forge with
                        our customers that make this journey so fulfilling.
                        We're not just selling books; we're facilitating a love
                        affair with literature, one story at a time. Together,
                        we're building a legacy of shared stories, a community
                        where the joy of reading thrives and imaginations take
                        flight.
                    </div>
                </div>
                <img
                    src={
                        "https://img.freepik.com/free-vector/online-library-isometric-background-with-human-characters-electronic-gadgets-pile-books-with-editable-text_1284-32386.jpg"
                    }
                    alt={"News"}
                    width={500}
                    style={{borderRadius: 10}}
                    height={400}
                />
            </div>
            <div className='w-auto h-auto font-extrabold text-3xl text-black pt-2'>
                Our members
            </div>
            <div className='flex flex-col justify-start w-full items-center px-5 py-2 gap-1'>
                <div className='flex flex-row justify-between w-full items-center px-5 py-2'>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Nguyễn Xuân Thắng
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Nguyễn Hữu Hùng
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Trịnh Duy Đạt
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Hạ Lê Quốc Thái
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between w-full items-center px-5 py-2'>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Chung Thịnh
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Nguyễn Ngô Hoàng Long
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Nguyễn Quốc Huy
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-start gap-2 items-center'>
                        <img
                            src={
                                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                            }
                            alt={"News"}
                            width={200}
                            height={200}
                            className='aspect-square'
                        />
                        <div className='font-bold text-2xl text-black w-auto'>
                            Đinh Văn Quang
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
