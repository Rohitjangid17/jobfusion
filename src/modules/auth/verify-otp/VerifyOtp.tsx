import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const VerifyOtp = () => {
    const navigate = useNavigate();

    const onFinish = (values: { otp: string }) => {
        console.log(values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
            <Card className="w-full max-w-md rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                    <Title level={2}>Verify OTP</Title>

                    <Text type="secondary">
                        Enter the 6-digit OTP sent to your email.
                    </Text>
                </div>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item name="otp" rules={[
                        {
                            required: true,
                            message: "Please enter OTP",
                        },
                    ]}>
                        <Input.OTP length={6} size="large" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block size="large" className="!rounded-xl mt-4">
                        Verify OTP
                    </Button>

                    <div className="flex justify-between mt-5">
                        <Button type="link">
                            Resend OTP
                        </Button>
                        <Button type="link" className="!p-0" onClick={() => navigate('/auth/forgot-password')}>
                            Back
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default VerifyOtp;