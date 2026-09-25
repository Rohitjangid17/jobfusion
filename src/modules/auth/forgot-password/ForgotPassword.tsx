import { Button, Card, Form, Input, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ForgotPassword = () => {
    const navigate = useNavigate();

    const onFinish = (values: { email: string }) => {
        console.log(values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6">
            <Card className="w-full max-w-md rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                    <Title level={2}>Forgot Password</Title>
                    <Text type="secondary">Enter your registered email address to receive an OTP.</Text>
                </div>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email Address" name="email" rules={[
                        {
                            required: true,
                            message: "Please enter your email",
                        },
                        {
                            type: "email",
                            message: "Enter a valid email",
                        },
                    ]}>
                        <Input size="large" prefix={<MailOutlined />} placeholder="Enter your email" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block size="large" className="!rounded-xl" >
                        Send OTP
                    </Button>

                    <div className="text-center mt-5">
                        <Button type="link" className="!p-0" onClick={() => navigate('/auth/login')}>
                            Back to Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default ForgotPassword;