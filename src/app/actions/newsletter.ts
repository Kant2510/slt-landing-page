'use server';

export interface SubscribeState {
  success: boolean;
  message: string;
}

export async function subscribeNewsletter(email: string): Promise<SubscribeState> {
  const trimmed = email ? email.trim() : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!trimmed) {
    return {
      success: false,
      message: 'Please enter your email address.',
    };
  }

  if (!emailRegex.test(trimmed)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  // Log ra server console
  console.log('====================================================');
  console.log('[LUXION NEWSLETTER SUBSCRIPTION]');
  console.log('Email:', trimmed);
  console.log('Timestamp:', new Date().toISOString());
  console.log('====================================================');

  // Mô phỏng độ trễ ngắn cho phản hồi UX mượt mà
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "You're on the list. We'll let you know when we're ready.",
  };
}
