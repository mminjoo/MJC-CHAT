import prisma from './client';

async function main() {
    // Seed User table
    const users = [
        {
            googleId: 'gh10043510@gmail.com',
        },
    ];

    for (const user of users) {
        await prisma.user.create({
            data: user,
        });
    }

    // Seed Chatroom table
    const chatrooms = [
        { title: '첫번째 채팅방', userId: 1 },
        { title: '두번째 채팅방', userId: 1 },
        { title: '두번째 채팅방', userId: 1 },
    ];

    for (const chatroom of chatrooms) {
        await prisma.chatRoom.create({
            data: chatroom,
        });
    }

    // Seed UserConversation table
    const userConversations = [
        { message: '아이언맨이 왼쪽으로 움직이면?', chatroomId: 1 },
        { message: '마리 앙투아네트가 싼 똥은?', chatroomId: 2 },
        { message: '말가 소가 햄버거 가게를 차리면?', chatroomId: 3 },
        { message: '열받지 않는 법은?', chatroomId: 4 },
    ];

    for (const userConversation of userConversations) {
        await prisma.userConversation.create({
            data: userConversation,
        });
    }

    // Seed BotConversation table
    const botConversations = [
        { message: '스타크 래프트', metaData: {}, userconversationId: 1 },
        { message: '루이 비 똥', metaData: {}, userconversationId: 2 },
        { message: '소말리아', metaData: {}, userconversationId: 3 },
        { message: '아홉이나 여덟만 받는다.', metaData: {}, userconversationId: 4 },
    ];

    for (const botConversation of botConversations) {
        await prisma.botConversation.create({
            data: botConversation,
        });
    }

    // Seed Report table
    const reports = [
        { botconversationId: 1, userId: 1 },
        { botconversationId: 2, userId: 1 },
        { botconversationId: 3, userId: 1 },
        { botconversationId: 4, userId: 1 },
    ];

    for (const report of reports) {
        await prisma.report.create({
            data: report,
        });
    }
}

main()
    .catch(e => console.log(e))
    .finally(() => prisma.$disconnect);